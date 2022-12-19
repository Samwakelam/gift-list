import { Gift, List, Owner, Workshop } from '@sam/types';
import { ButtonProps, ModalChildProps } from '../../../atoms';

export enum ConfirmModalType {
  DELETE = 'delete',
}

export interface ConfirmModalProps extends ModalChildProps {
  type: ConfirmModalType;
  entity: List | Workshop | Owner | Gift;
  title?: string;
  description?: string;
}

export type ConfirmModalState = {
  isProcessing: boolean;
};

export type ConfirmModalHandlers = {
  resolveConfirmButton: () => ButtonProps;
  resolveDeclineButton: () => ButtonProps;
};
