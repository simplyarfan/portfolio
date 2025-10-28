// Load and process knowledge base files
import personalInfo from '../knowledge-base/personal_info.json';
import projects from '../knowledge-base/projects.json';
import skills from '../knowledge-base/skills.json';
import ragExperience from '../knowledge-base/rag_experience.json';

export interface Document {
  content: string;
  metadata: {
    source: string;
    category: string;
    title?: string;
  };
}

export function loadKnowledgeBase(): Document[] {
  const documents: Document[] = [];

  // Process personal info
  const personalContent = `
Name: ${personalInfo.basic_info.name}
Title: ${personalInfo.basic_info.title}
Location: ${personalInfo.basic_info.location}
Contact: ${personalInfo.basic_info.phone}
LinkedIn: ${personalInfo.basic_info.linkedin}
Instagram: ${personalInfo.basic_info.instagram}
GitHub: ${personalInfo.basic_info.github}
YouTube: ${personalInfo.basic_info.youtube}

Current Role: ${personalInfo.current_role.position} at ${personalInfo.current_role.company}
${personalInfo.current_role.description}

Education: ${personalInfo.education.degree} from ${personalInfo.education.university} (${personalInfo.education.graduation_year})

About: ${personalInfo.about}

Professional Interests: ${personalInfo.interests.professional.join(', ')}
Personal Interests: ${personalInfo.interests.personal.join(', ')}

Aspirations: ${personalInfo.aspirations.join(', ')}
  `.trim();

  documents.push({
    content: personalContent,
    metadata: {
      source: 'personal_info.json',
      category: 'personal',
      title: 'Personal Information'
    }
  });

  // Process projects
  projects.projects.forEach((project) => {
    const projectContent = `
Project: ${project.name}
Description: ${project.description}
Technologies: ${project.technologies.join(', ')}
Achievement: ${project.achievement}
${project.github ? `GitHub: ${project.github}` : ''}

Highlights:
${project.highlights.map(h => `- ${h}`).join('\n')}

Impact: ${project.impact}
    `.trim();

    documents.push({
      content: projectContent,
      metadata: {
        source: 'projects.json',
        category: 'project',
        title: project.name
      }
    });
  });

  // Process skills
  const skillsContent = `
Programming Languages:
${skills.skills.languages.map(l => `- ${l}`).join('\n')}

Frameworks & Libraries:
${skills.skills.frameworks_libraries.map(f => `- ${f}`).join('\n')}

AI/ML Expertise:
${skills.skills.ai_ml.map(a => `- ${a}`).join('\n')}

Cloud & Databases:
${skills.skills.cloud_databases.map(c => `- ${c}`).join('\n')}

Tools & Platforms:
${skills.skills.tools_platforms.map(t => `- ${t}`).join('\n')}

Specializations:
${skills.skills.specializations.map(s => `- ${s}`).join('\n')}
  `.trim();

  documents.push({
    content: skillsContent,
    metadata: {
      source: 'skills.json',
      category: 'skills',
      title: 'Technical Skills'
    }
  });

  // Process RAG experience
  const ragContent = `
${ragExperience.rag_expertise.title}

${ragExperience.rag_expertise.description}

Key Achievements:
${ragExperience.rag_expertise.achievements.map(a => `
- ${a.achievement}
  ${a.details}
`).join('\n')}

Technologies Used:
${ragExperience.rag_expertise.technologies.map(t => `- ${t}`).join('\n')}

Key Concepts:
${Object.entries(ragExperience.rag_expertise.key_concepts).map(([key, value]) => `
- ${key.replace(/_/g, ' ').toUpperCase()}: ${value}
`).join('\n')}

Production Experience: ${ragExperience.rag_expertise.production_experience}
  `.trim();

  documents.push({
    content: ragContent,
    metadata: {
      source: 'rag_experience.json',
      category: 'rag_expertise',
      title: 'RAG Expertise'
    }
  });

  return documents;
}

// Simple text chunking function
export function chunkText(text: string, chunkSize: number = 500, overlap: number = 50): string[] {
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  
  for (let i = 0; i < words.length; i += chunkSize - overlap) {
    const chunk = words.slice(i, i + chunkSize).join(' ');
    if (chunk.trim()) {
      chunks.push(chunk);
    }
  }
  
  return chunks;
}

// Create chunked documents
export function createChunkedDocuments(): Document[] {
  const documents = loadKnowledgeBase();
  const chunkedDocs: Document[] = [];

  documents.forEach(doc => {
    const chunks = chunkText(doc.content, 300, 50);
    chunks.forEach((chunk, index) => {
      chunkedDocs.push({
        content: chunk,
        metadata: {
          ...doc.metadata,
          chunkIndex: index,
          totalChunks: chunks.length
        } as any
      });
    });
  });

  return chunkedDocs;
}
