
export const NOTION_DATABASES = {
  master: process.env.NOTION_DATABASE_ID || '',
  timeline: process.env.NOTION_TIMELINE_DB_ID || '',
  factions: process.env.NOTION_FACTIONS_DB_ID || '',
  locations: process.env.NOTION_LOCATIONS_DB_ID || '',
  powerSystems: process.env.NOTION_POWER_SYSTEMS_DB_ID || '',
  artifacts: process.env.NOTION_ARTIFACTS_DB_ID || '',
  themes: process.env.NOTION_THEMES_DB_ID || '',
  storyHooks: process.env.NOTION_STORY_HOOKS_DB_ID || '',
};

export const SYNC_INTERVAL = 3600000; // 1 hour in milliseconds
