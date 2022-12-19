import { Hook } from '@sam/types';

import { InputGroupHandlers, InputGroupState } from '../../../../forms';
import { ModalChildProps } from '../../../atoms';

export interface AddConnectionModalProps
  extends Pick<ModalChildProps, 'onClose'> {
  onClose: () => void;
}

export type AddConnectionModalState = {
  addConnectionInput: Hook<InputGroupState, InputGroupHandlers>;
  isProcessing: boolean;
};

export type AddConnectionModalHandlers = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
