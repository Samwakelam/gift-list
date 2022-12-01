import { useState } from 'react';
import { css, theme, tw } from 'twind/css';

import { FillType } from '@sam/icons';
import { Owner } from '@sam/types';

import {
  Button,
  ButtonVariant,
  ConfirmModal,
  ConfirmModalType,
  Modal,
} from '../../../components';
import { useWorkshopManager } from '../workshop-manager.view-model';

const S = {
  BinButtonCss: css({
    '&': {
      position: 'absolute',
      right: theme('spacing.0'),
      '& path': {
        fill: theme('colors.red.600'),
      },
    },
    '@screen sm': {
      right: theme('spacing.40'),
    },
  }),
};

export const DeleteUserModal = ({ user }: { user: Owner }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    handlers: { removeConnection },
  } = useWorkshopManager();

  return (
    <>
      <Button
        icon={{
          icon: 'bin',
          ariaLabel: 'delete',
          fill: FillType.OUTLINE,
        }}
        buttonVariant={ButtonVariant.TERTIARY}
        className={tw(S.BinButtonCss)}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <ConfirmModal
          type={ConfirmModalType.DELETE}
          entity={user}
          onClose={() => setIsModalOpen(false)}
          dispatches={{ onRemove: removeConnection }}
          description={`If you delete ${user.name.toUpperCase()} you will no longer be able to share your workshops and lists with them.`}
        />
      </Modal>
    </>
  );
};
