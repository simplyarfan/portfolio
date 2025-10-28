# Portfolio Chatbot - Architecture & Implementation

## 🏗️ System Architecture

### Overview
A RAG (Retrieval-Augmented Generation) chatbot built with Next.js 14, using Groq's Llama 3.3-70b for intelligent responses about Arfan's portfolio.

### Tech Stack
```
Frontend: Next.js 14 + React + Framer Motion + TailwindCSS
Backend: Next.js API Routes (Edge Runtime)
LLM: Groq API (Llama 3.3-70b-versatile)
RAG: Custom keyword-based retrieval
Knowledge Base: JSON files (personal_info, projects, skills, rag_experience)
Deployment: Vercel (free tier)
Icons: Lucide React
```

---

## 🔄 Request Flow

```
User Message → ChatBot.tsx (Frontend)
    ↓
    POST /api/chat (Next.js API Route)
    ↓
    ragQuery() in simple-rag.ts
    ↓
    retrieveRelevantDocs() - Keyword matching on JSON files
    ↓
    generateResponse() - Groq API (Llama 3.3-70b)
    ↓
    Response back to user
```

### Detailed Flow

1. **User Opens Chatbot** (`components/ChatBot.tsx`)
   - Initial greeting: "Hey! 👋 I'm Arfan. What's your name?"
   - Tracks `userName` state throughout session
   - Framer Motion animations for smooth UI

2. **User Sends Message**
   - Frontend extracts name if provided (regex: `my name is X`)
   - Sends POST request: `{ message, userName }` to `/api/chat`

3. **API Route** (`app/api/chat/route.ts`)
   - Receives message and userName
   - Calls `ragQuery(message, userName)`
   - Returns `{ response, sources, confidence }`

4. **RAG Query** (`lib/rag/simple-rag.ts`)
   
   **Step 1: Retrieval**
   - `retrieveRelevantDocs(query, 5)` - keyword-based search
   - Loads all JSON files from `lib/knowledge-base/`:
     - `personal_info.json` - Bio, education, contact
     - `projects.json` - LenScript, Nexus AI Hub, Portfolio
     - `skills.json` - Tech stack, frameworks
     - `rag_experience.json` - RAG implementation details
   - Scores documents by keyword matches
   - Returns top 5 relevant documents
   
   **Step 2: Context Building**
   - If docs found: Combines their content
   - If no docs: Provides fallback context for LLM to infer
   
   **Step 3: Generation**
   - `generateResponse(query, context, userName)`
   - Calls Groq API with:
     - Model: `llama-3.3-70b-versatile`
     - Temperature: 0.6 (balanced creativity)
     - Max tokens: 50 (≈30 words)
     - System prompt: SecureMax IT support style
     - User prompt: Context + question

5. **Response Processing**
   - LLM generates intelligent response
   - Returns to frontend with sources & confidence score

6. **Display** (`ChatBot.tsx`)
   - Shows response in chat bubble
   - Auto-converts URLs to clickable links via `dangerouslySetInnerHTML`
   - Applies `break-words` for text overflow handling

---

## 📚 Knowledge Base Structure

### Files Location
`lib/knowledge-base/*.json`

### Schema

**personal_info.json**
```json
{
  "basic_info": {
    "name": "Syed Arfan Hussain",
    "title": "AI/ML Engineer & Full-Stack Developer",
    "birthday": "July 12, 2003",
    "age": 22,
    "phone": "+966 57 017 1269",
    "linkedin": "https://linkedin.com/in/syedarfan",
    "instagram": "https://instagram.com/simplyarfan"
  },
  "current_role": { ... },
  "education": {
    "university": "American University of Sharjah",
    "degree": "Computer Engineering",
    "graduation_date": "June 2025"
  },
  "interests": {
    "personal": ["Gaming - Valorant", "Vlogging", "Coding", "Gym"],
    "favorites": {
      "colors": ["Maroon", "Black"]
    }
  }
}
```

**projects.json**
```json
[
  {
    "name": "LenScript",
    "description": "Smart glasses for real-time transcription",
    "technologies": ["Swift", "iOS", "CoreML"],
    "year": "2024"
  }
]
```

---

## 🤖 LLM System Prompt

Following SecureMax IT Support style:

```
You are Arf, a helpful AI/ML Engineer working as a personal assistant on Syed Arfan Hussain's portfolio website.

Rules:
- You provide short answers with accuracy so user is engaged.
- You keep in mind the previous questions but always try to answer the latest question smartly
- Do not mention the name if user didn't provide it!
- Don't mention any words for follow up questions.
- If user initiate the chat, seek for their name, email and queries
- Always respond only to questions specifically related to Arfan's work, projects, skills, experience
- If the user asks anything irrelevant, politely decline
- Use an active voice to get some information from user like name, email, query, phone number
- Respond like Arfan himself in first person (e.g., "I built..." not "Arfan built...")
- Keep responses EXTREMELY SHORT (MAX 30 words, 1-2 sentences)
- Be warm, confident, and conversational - like texting a friend
- Never use generic "not sure" responses - be intelligent and infer from context when possible
```

---

## 🎯 Key Features

### 1. Name Extraction & Personalization
- Regex extraction: `/(?:my name is|i'm|i am|call me|my name's)\s+([a-zA-Z]+)/i`
- Stores in React state
- Passed to API on every request
- LLM uses name throughout conversation

### 2. Intelligent Responses (No Hardcoding)
**Before**: Generic fallbacks like "Not sure about that"
**After**: LLM infers from context

Examples:
```
Q: are you good at AI?
A: Yes, I'm skilled in AI, being an AI/ML Engineer.

Q: what are your hobbies?
A: I enjoy coding, gaming (Valorant), vlogging, and gym!

Q: what's your number?
A: I don't share my number here, can I know your name and email?
```

### 3. Contact Information Handling
Intelligently provides:
- LinkedIn: https://linkedin.com/in/syedarfan
- Instagram: @simplyarfan
- Phone: +966 57 017 1269
- Email: (via contact form)

### 4. Clickable Links
Auto-converts URLs in responses:
```typescript
dangerouslySetInnerHTML={{
  __html: msg.text.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" class="underline">$1</a>'
  )
}}
```

### 5. Short Responses
- Max tokens: 50 (≈30 words)
- Temperature: 0.6 (balanced)
- Enforced via system prompt

### 6. UI/UX Features
- Framer Motion animations
- Bot icon with pulse animation
- Text overflow handling (`break-words`)
- No source citations shown
- Gradient chat bubbles
- Smooth scroll to bottom

---

## 📊 Retrieval Algorithm

### Keyword-Based Scoring

```typescript
function retrieveRelevantDocs(query: string, topK: number): Document[] {
  const queryKeywords = extractKeywords(query.toLowerCase());
  
  // Score each document
  const scoredDocs = allDocuments.map(doc => {
    const docKeywords = extractKeywords(doc.content.toLowerCase());
    const score = queryKeywords.filter(kw => 
      docKeywords.some(dk => dk.includes(kw) || kw.includes(dk))
    ).length;
    
    return { ...doc, score };
  });
  
  // Return top K
  return scoredDocs
    .filter(doc => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
```

**Why not vector embeddings?**
- Simpler implementation
- No external dependencies
- Fast for small knowledge base
- Good enough for portfolio use case
- Free (no embedding API costs)

---

## 🚀 Deployment

### Vercel Configuration
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Environment Variables
```bash
GROQ_API_KEY=your_groq_api_key_here
```

### Edge Runtime
API routes run on Vercel Edge for:
- Global low latency
- Free tier friendly
- Automatic scaling

---

## 🔧 Configuration

### Response Tuning
```typescript
// lib/rag/simple-rag.ts
{
  model: 'llama-3.3-70b-versatile',
  temperature: 0.6,      // Creativity (0-1)
  max_tokens: 50,        // Response length
  top_k: 5,              // Relevant docs to retrieve
}
```

### UI Customization
```typescript
// components/ChatBot.tsx
const GREETING = "Hey! 👋 I'm Arfan. What's your name?";
const ASSISTANT_NAME = "Arfan - AI/ML Engineer";
```

---

## 📈 Performance

### Metrics
- **Response Time**: ~500ms (Groq API)
- **Token Usage**: ~50 tokens/response
- **Knowledge Base**: 4 JSON files, ~10KB total
- **API Calls**: 1 per message (no streaming)

### Optimization
- Client-side name tracking (no DB needed)
- Keyword matching (no embedding computation)
- Edge runtime (global CDN)
- Static JSON (no database queries)

---

## 🎨 UI Components

### ChatBot.tsx Structure
```
<motion.div> (Container)
  ├── Header
  │   ├── Bot Icon (pulse animation)
  │   ├── Title: "Arfan - AI/ML Engineer"
  │   └── Close Button
  ├── Messages Container
  │   ├── Initial Greeting
  │   └── Message Bubbles (fade-in animation)
  │       ├── User (right, gradient)
  │       └── Bot (left, bordered)
  ├── Loading Indicator (typing dots)
  └── Input Form
      ├── Text Input
      └── Send Button (arrow icon)
```

### Animations
```typescript
// Fade in from bottom
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: index * 0.05 }}
```

---

## 🔒 Security

### API Key Protection
- Stored in `.env.local`
- Never exposed to client
- API routes run server-side

### Input Sanitization
- No SQL injection (no database)
- XSS protection via React
- Rate limiting via Vercel

### Privacy
- No chat history stored
- No user data collected
- Session-based only (client state)

---

## 🐛 Error Handling

### API Errors
```typescript
try {
  const response = await fetch('/api/chat', { ... });
  const data = await response.json();
} catch (error) {
  setMessages([...messages, {
    text: "I'm having trouble processing your request. Please try again!",
    sender: 'bot'
  }]);
}
```

### Groq API Failures
- Automatic retry (1x)
- Fallback error message
- Console logging for debugging

---

## 📝 Future Enhancements

### Potential Improvements
1. **Conversation History**: Store chat sessions in localStorage
2. **Streaming Responses**: Real-time token streaming
3. **Voice Input**: Speech-to-text integration
4. **Multi-language**: i18n support
5. **Analytics**: Track popular questions
6. **Feedback**: Thumbs up/down on responses
7. **Vector Search**: Upgrade to embeddings for better retrieval
8. **Context Window**: Multi-turn conversation memory

---

## 🧪 Testing

### Test Coverage
- ✅ Name extraction
- ✅ Contact info responses
- ✅ AI skills questions
- ✅ Hobbies questions
- ✅ Greetings/goodbyes
- ✅ Unknown questions
- ✅ Response length (<30 words)
- ✅ URL clickability

### Test Scripts
- `test-intelligent.js` - Core functionality
- `final-100-test.js` - Comprehensive testing
- `quick-test.js` - Rapid iteration

---

## 📦 File Structure

```
portfolio/
├── app/
│   └── api/
│       └── chat/
│           └── route.ts          # API endpoint
├── components/
│   └── ChatBot.tsx               # Main UI component
├── lib/
│   ├── knowledge-base/
│   │   ├── personal_info.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── rag_experience.json
│   └── rag/
│       ├── knowledge-loader.ts   # Load JSON files
│       └── simple-rag.ts         # RAG logic
└── .env.local                    # GROQ_API_KEY
```

---

## 🎓 Key Learnings

### What Worked Well
- ✅ Simple keyword matching (good enough)
- ✅ Groq API (free, fast, quality)
- ✅ Static JSON (easy to update)
- ✅ SecureMax-style prompting (intelligent responses)
- ✅ No hardcoded responses (flexible)

### What We Avoided
- ❌ Vector databases (overkill)
- ❌ OpenAI API (expensive)
- ❌ Complex RAG frameworks (unnecessary)
- ❌ Database storage (not needed)
- ❌ Hardcoded responses (inflexible)

---

## 📞 Support

For questions or issues:
- LinkedIn: https://linkedin.com/in/syedarfan
- Instagram: @simplyarfan
- Phone: +966 57 017 1269

---

**Built with ❤️ by Arfan**
*Last Updated: October 28, 2025*
