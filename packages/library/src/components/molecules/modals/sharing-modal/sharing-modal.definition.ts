import { DispatchesType, Owner } from '@sam/types';

import { CheckedProps } from '../../../../forms';

export type SharingModalProps = {
  allUsers: Owner[];
  checkedUsers: Owner[];
  dispatches: DispatchesType;
  onClose: () => void;
};

export type SharingModalState = {
  checked: Owner[];
};

export type SharingModalHandlers = {
  onChecked: (box: CheckedProps) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
