
import { NotionService } from '../services/notion-client';
import { NOTION_DATABASES, SYNC_INTERVAL } from '../config/notion-config';

class WorldStore {
  private static instance: WorldStore;
  private notionService: NotionService;
  private worldData: any = {};

  private constructor() {
    this.notionService = new NotionService(process.env.NOTION_API_KEY || '');
    this.startSyncInterval();
  }

  static getInstance(): WorldStore {
    if (!WorldStore.instance) {
      WorldStore.instance = new WorldStore();
    }
    return WorldStore.instance;
  }

  private startSyncInterval() {
    this.syncData();
    setInterval(() => this.syncData(), SYNC_INTERVAL);
  }

  private async syncData() {
    try {
      this.worldData = await this.notionService.syncWorldData(NOTION_DATABASES);
    } catch (error) {
      console.error('Failed to sync world data:', error);
    }
  }

  getWorldData() {
    return this.worldData;
  }

  async forceSyncData() {
    await this.syncData();
  }
}

export const worldStore = WorldStore.getInstance();
