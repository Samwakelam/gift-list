import { useRef } from 'react';

import { List, Workshop } from '@sam/types';

import { ListManagerContract } from './list-manager.contract';

export class ListManagerService implements ListManagerContract {
  readonly workshopId: string;

  constructor(workshopId: string) {
    this.workshopId = workshopId;
  }

  async createList(list: Omit<List, 'id'>): Promise<void> {}

  async getWorkshop(): Promise<Workshop | null> {
    return null;
  }

  async updateWorkshop(workshop: Workshop): Promise<void> {}

  async updateListById(id: string, list: List): Promise<void> {}

  async deleteListById(id: string): Promise<void> {}
}

export function useListManagerService(workshopId: string) {
  const manager = useRef(new ListManagerService(workshopId)).current;
  return manager;
}
