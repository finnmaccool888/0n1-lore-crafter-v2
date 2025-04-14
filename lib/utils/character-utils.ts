
export function calculateAgingRate(age: number): number {
  return age > 1000 ? 0.5 : 1;
}

export function getMaturityCategory(age: number): string {
  if (age < 100) return 'Juvenile';
  if (age < 500) return 'Young';
  if (age < 1000) return 'Mature';
  return 'Ancient';
}

export function getTimePeriod(birthYear: number): string {
  const periodRanges = [
    { start: 99000, end: 100000, name: 'Early Nexus' },
    { start: 100000, end: 100500, name: 'Core Nexus' },
    { start: 100500, end: 101000, name: 'Late Nexus' }
  ];
  
  for (const range of periodRanges) {
    if (birthYear >= range.start && birthYear <= range.end) {
      return range.name;
    }
  }
  return 'Unknown';
}
