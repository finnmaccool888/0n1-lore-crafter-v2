
import { NextResponse } from 'next/server';
import { createCharacter, findContemporaryCharacters } from '@/lib/services/character-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const character = await createCharacter(body);
    
    // Find and link contemporary characters
    const contemporaries = await findContemporaryCharacters(character.birthYear);
    
    return NextResponse.json({ character, contemporaries: contemporaries.slice(0, 5) });
  } catch (error) {
    console.error('Error creating character:', error);
    return NextResponse.json({ error: 'Failed to create character' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const characters = await prisma.character.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(characters);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return NextResponse.json({ error: 'Failed to fetch characters' }, { status: 500 });
  }
}
