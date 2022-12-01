import { useRef } from 'react';

import { Owner, Workshop } from '@sam/types';

import { WorkshopManagerContract } from './workshop-manager.contract';

export class WorkshopManagerService implements WorkshopManagerContract {
  readonly ownerId: string;

  constructor(ownerId: string) {
    this.ownerId = ownerId;
  }

  async createWorkshop(workshop: Omit<Workshop, 'id'>): Promise<void> {}

  async getOwner(): Promise<Owner | null> {
    return null;
  }

  async getOwnerById(id: string): Promise<Owner | null> {
    return null;
  }

  async updateOwner(owner: Owner): Promise<void> {}

  async updateWorkshopById(id: string, workshop: Workshop): Promise<void> {}

  async deleteWorkshopById(id: string): Promise<void> {}
}

export function useWorkshopManagerService(ownerId: string) {
  const manager = useRef(new WorkshopManagerService(ownerId)).current;
  return manager;
}
