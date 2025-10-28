import { NextRequest, NextResponse } from 'next/server';
import { ragQuery } from '@/lib/rag/simple-rag';

export const runtime = 'edge'; // Use edge runtime for faster responses

export async function POST(request: NextRequest) {
  try {
    const { message, userName } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Perform RAG query with userName
    const result = await ragQuery(message, userName || '');

    return NextResponse.json({
      response: result.answer,
      sources: result.sources.map(s => ({
        category: s.metadata.category,
        title: s.metadata.title
      })),
      confidence: result.confidence
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process message',
        response: "I'm having trouble processing your request right now. Please try again!"
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'healthy',
    message: 'Chat API is running'
  });
}
