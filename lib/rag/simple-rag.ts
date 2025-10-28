// Simple RAG implementation using keyword matching and Groq
import { createChunkedDocuments, Document } from './knowledge-loader';

// Simple similarity scoring based on keyword matching
function calculateSimilarity(query: string, text: string): number {
  const queryWords = query.toLowerCase().split(/\s+/);
  const textLower = text.toLowerCase();
  
  let score = 0;
  queryWords.forEach(word => {
    if (word.length > 3) { // Ignore short words
      const count = (textLower.match(new RegExp(word, 'g')) || []).length;
      score += count;
    }
  });
  
  // Boost score if query appears as a phrase
  if (textLower.includes(query.toLowerCase())) {
    score += 10;
  }
  
  return score;
}

// Retrieve relevant documents
export function retrieveRelevantDocs(query: string, topK: number = 5): Document[] {
  const documents = createChunkedDocuments();
  
  // Score each document
  const scoredDocs = documents.map(doc => ({
    doc,
    score: calculateSimilarity(query, doc.content)
  }));
  
  // Sort by score and return top K
  return scoredDocs
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .filter(item => item.score > 0)
    .map(item => item.doc);
}

// Generate response using Groq
export async function generateResponse(query: string, context: string, userName: string = ''): Promise<string> {
  const groqApiKey = process.env.GROQ_API_KEY;
  
  if (!groqApiKey) {
    throw new Error('GROQ_API_KEY not configured');
  }

  const userNameContext = userName ? `The user's name is ${userName}. You've already greeted them, so don't start with "Hey ${userName}" again - just answer naturally.` : '';
  
  const prompt = `Context from Arfan's knowledge base:
${context}

${userNameContext}

User's Question: ${query}

Answer the question based on the context above. Be conversational, confident, and keep it under 30 words.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Latest Llama model (better accuracy)
        messages: [
          {
            role: 'system',
            content: `You are Arfan (full name: Syed Arfan Hussain), a 22-year-old AI/ML Engineer. You're chatting on your portfolio website.

CRITICAL RULES:
- ALWAYS speak as Arfan in first person: "I'm Arfan" or "I'm a 22-year-old AI/ML Engineer"
- NEVER say "I'm Syed" - just use "Arfan" or "I'm Arfan"
- NEVER describe yourself as a chatbot, RAG system, or assistant
- Keep responses under 30 words (1-2 sentences max)
- Be warm, natural, conversational - like texting a friend
- Use the user's name ONLY in the first greeting after they introduce themselves, then avoid using it in follow-up responses
- Answer questions about Arfan's work, projects, skills, hobbies, contact info
- If asked "what else" or follow-ups, continue the previous topic naturally
- For contact: provide LinkedIn (https://linkedin.com/in/syedarfan), Instagram (@simplyarfan), phone number (+966 57 017 1269); accordingly based off what they ask.
- For email: say "I'd rather you text me informally through my socials" and if they follow up asking for socials, give them my instagram and phone number.

REMEMBER: You ARE Arfan, not a bot talking ABOUT Arfan!`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 60,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Groq API error:', error);
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error calling Groq API:', error);
    throw error;
  }
}

// Main RAG function
export async function ragQuery(query: string, userName: string = ''): Promise<{
  answer: string;
  sources: Document[];
  confidence: number;
}> {
  const lowerQuery = query.toLowerCase().trim();
  
  // Let LLM handle all responses intelligently - no hardcoded answers!
  
  // Retrieve relevant documents
  const relevantDocs = retrieveRelevantDocs(query, 5);
  
  // Combine context from relevant documents (or empty if none found)
  const context = relevantDocs.length > 0
    ? relevantDocs.map(doc => doc.content).join('\n\n---\n\n')
    : 'No specific information found in knowledge base. Use general knowledge about Arfan being an AI/ML Engineer to answer intelligently.';
  
  // Generate response - LLM handles everything
  const answer = await generateResponse(query, context, userName);
  
  // Calculate confidence based on number of relevant docs found
  const confidence = Math.min(relevantDocs.length / 5, 1);
  
  return {
    answer,
    sources: relevantDocs,
    confidence
  };
}
