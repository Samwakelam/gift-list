import { Hook } from '@sam/types';
import { InputGroupHandlers, InputGroupState } from '../../../../forms';

export type AddConnectionModalProps = {
  onClose: () => void;
};

export type AddConnectionModalState = {
  addConnectionInput: Hook<InputGroupState, InputGroupHandlers>;
};

export type AddConnectionModalHandlers = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
