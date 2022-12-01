import { List, Owner, Workshop } from '@sam/types';

export type ListManagerProps = {};

export type ListManagerHandlers = {
  addList: (
    list: Omit<List, 'id'>,
    callback: (result: boolean) => void
  ) => Promise<void>;
  editList: (list: List, callback: (result: boolean) => void) => Promise<void>;
  editWorkshop: (
    workshop: Workshop,
    callback: (result: boolean) => void
  ) => Promise<void>;
  removeList: (id: string, callback: (result: boolean) => void) => void;
  removeWorkshop: () => Promise<void>;
};

export type ListManagerState = {
  workshop: Workshop | null;
  lists: List[];
  connections: Owner[];
  isLoading: boolean;
};
