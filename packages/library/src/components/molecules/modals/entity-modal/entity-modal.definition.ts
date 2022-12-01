import { DispatchesType, Hook, List, Workshop } from '@sam/types';

import { InputGroupHandlers, InputGroupState } from '../../../../forms';
import { ButtonProps } from '../../../atoms';

export enum EntityModalType {
  CREATE = 'create',
  EDIT = 'edit',
}

export type EntityModalProps = {
  type: EntityModalType;
  entity: List | Workshop | null;
  dispatches: DispatchesType;
  onClose: () => void;
};

export type EntityModalState = {
  entity: List | Workshop | null;
  isProcessing: boolean;
  nameInput: Hook<InputGroupState, InputGroupHandlers>;
  descriptionInput: Hook<InputGroupState, InputGroupHandlers>;
};

export type EntityModalHandlers = {
  resolveButtonType: () => ButtonProps;
};
