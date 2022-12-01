import { Owner, Workshop } from '@sam/types';

export type WorkshopManagerProps = {};

export type WorkshopManagerState = {
  owner: Owner | null;
  workshops: Workshop[];
  connections: Owner[];
  isLoading: boolean;
};

export type WorkshopManagerHandlers = {
  addConnection: (id: string, callback: (result: boolean) => void) => void;
  addWorkshop: (
    workshop: Omit<Workshop, 'id'>,
    callback: (result: boolean) => void
  ) => Promise<void>;
  editWorkshop: (
    workshop: Workshop,
    callback: (result: boolean) => void
  ) => Promise<void>;
  removeConnection: (id: string) => void;
  removeWorkshop: (id: string, callback: (result: boolean) => void) => void;
};
