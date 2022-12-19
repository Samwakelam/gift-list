import { ReactElement } from 'react';
import { tw } from 'twind';

import { Button } from '../../../atoms';

import { ConfirmModalProps } from './confirm-modal.definition';
import { useConfirmModal } from './confirm-modal.hook';

import * as S from './confirm-modal.styles';

export const ConfirmModal = ({
  type,
  entity,
  title,
  description,
  dispatches,
  onClose,
}: ConfirmModalProps): ReactElement<ConfirmModalProps> => {
  const {
    state: { isProcessing },
    handlers,
  } = useConfirmModal(entity, type, dispatches, onClose);

  return (
    <div className={tw(S.ConfirmModalCss)}>
      <h3>{title ? title : 'Are you sure?'}</h3>
      <p>{description}</p>
      <div className={tw(S.ButtonBoxCss)}>
        <Button {...handlers.resolveConfirmButton()} disabled={isProcessing} />
        <Button {...handlers.resolveDeclineButton()} disabled={isProcessing} />
      </div>
    </div>
  );
};
