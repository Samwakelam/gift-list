import { Owner, Workshop } from '@sam/types';

export interface WorkshopManagerContract {
  createWorkshop(workshop: Omit<Workshop, 'id'>): Promise<void>;
  getOwner(): Promise<Owner | null>;
  getOwnerById(id: string): Promise<Owner | null>;
  updateOwner(owner: Owner): Promise<void>;
  updateWorkshopById(id: string, workshop: Workshop): Promise<void>;
  deleteWorkshopById(id: string): Promise<void>;
}
