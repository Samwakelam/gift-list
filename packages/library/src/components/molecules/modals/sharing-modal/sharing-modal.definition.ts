import { Owner } from '@sam/types';

import { CheckedProps } from '../../../../forms';
import { ModalChildProps } from '../../../atoms';

export interface SharingModalProps extends ModalChildProps {
  allUsers: Owner[];
  checkedUsers: Owner[];
}

export type SharingModalState = {
  checked: Owner[];
  isProcessing: boolean;
};

export type SharingModalHandlers = {
  onChecked: (box: CheckedProps) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
