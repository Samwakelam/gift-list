import { DispatchesType, List, Owner, Workshop } from '@sam/types';

export type EntityCardProps = {
  entity: List | Workshop;
  allUsers: Owner[];
  dispatches: DispatchesType;
};

export type EntityCardState = {
  isModalOpen: boolean;
};

export type EntityCardHandlers = {
  onEditVisibility: () => void;
  onEditSharing: (
    checked: Owner[],
    callback: (result: boolean) => void
  ) => void;
  resolveModal: (isOpen: boolean) => void;
};
