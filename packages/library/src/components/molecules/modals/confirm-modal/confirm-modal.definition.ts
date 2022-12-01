import { DispatchesType, List, Owner, Workshop } from '@sam/types';
import { ButtonProps } from '../../../atoms';

export enum ConfirmModalType {
  DELETE = 'delete',
}

export type ConfirmModalProps = {
  type: ConfirmModalType;
  entity: List | Workshop | Owner;
  title?: string;
  description?: string;
  dispatches: DispatchesType;
  onClose: () => void;
};

export type ConfirmModalState = {
  isProcessing: boolean;
};

export type ConfirmModalHandlers = {
  resolveConfirmButton: () => ButtonProps;
  resolveDeclineButton: () => ButtonProps;
};
