
import { Client } from '@notionhq/client';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

export class NotionService {
  private client: Client;
  
  constructor(apiKey: string = process.env.NOTION_API_KEY || '') {
    if (!apiKey) {
      throw new Error('Notion API key is required');
    }
    this.client = new Client({ auth: apiKey });
  }

  async fetchDatabase(databaseId: string) {
    const cacheKey = `db_${databaseId}`;
    const cached = cache.get(cacheKey);
    
    if (cached) return cached;

    const response = await this.client.databases.query({
      database_id: databaseId,
    });

    cache.set(cacheKey, response);
    return response;
  }

  async syncWorldData(databases: { [key: string]: string }) {
    const worldData: any = {};
    
    for (const [category, dbId] of Object.entries(databases)) {
      worldData[category] = await this.fetchDatabase(dbId);
    }
    
    return worldData;
  }
}

export const getNotionClient = (apiKey: string) => new NotionService(apiKey);
