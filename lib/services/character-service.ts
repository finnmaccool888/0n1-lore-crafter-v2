
import { PrismaClient } from '@prisma/client';
import { calculateAgingRate, getMaturityCategory, getTimePeriod, getEpisodeAlignment } from '../utils/character-utils';

const prisma = new PrismaClient();
const CURRENT_NEXUS_YEAR = 100250;

export async function createCharacter(characterData: any) {
  const age = characterData.age || Math.floor(Math.random() * 1000);
  const birthYear = CURRENT_NEXUS_YEAR - age;
  const agingRate = calculateAgingRate(age);
  const maturityCategory = getMaturityCategory(age);
  const timePeriod = getTimePeriod(birthYear);
  const episodeAlignment = getEpisodeAlignment(birthYear);
  
  const coreIntegrity = characterData.coreIntegrity || Math.floor(Math.random() * 100) + 1;
  const algorithmComplexity = characterData.algorithmComplexity || Math.floor(Math.random() * 1000) + 1;
  const temporalFragments = characterData.temporalFragments || Math.floor(age * agingRate);

  return prisma.character.create({
    data: {
      name: characterData.name,
      age,
      birthYear,
      maturityCategory,
      timePeriod,
      episodeAlignment,
      temporalFragments,
      algorithmComplexity,
      coreIntegrity,
      bio: characterData.bio || ""
    }
  });
}

export async function findContemporaryCharacters(characterBirthYear: number, ageRange = 500) {
  const minYear = characterBirthYear - ageRange;
  const maxYear = characterBirthYear + ageRange;
  
  return prisma.character.findMany({
    where: {
      birthYear: {
        gte: minYear,
        lte: maxYear
      }
    },
    orderBy: {
      birthYear: 'asc'
    }
  });
}

export async function updateCharacterRelations(characterId: string, relationData: any) {
  return prisma.character.update({
    where: { id: characterId },
    data: {
      mentors: { connect: relationData.mentors?.map((id: string) => ({ id })) || [] },
      students: { connect: relationData.students?.map((id: string) => ({ id })) || [] },
      contemporaries: { connect: relationData.contemporaries?.map((id: string) => ({ id })) || [] }
    }
  });
}
