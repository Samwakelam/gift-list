import { ReactElement, useState } from 'react';

import { FillType } from '@sam/icons';

import { ColourType, MenuDropdown, Modal } from '../../../atoms';
import {
  ConfirmModal,
  ConfirmModalType,
  EntityModal,
  EntityModalType,
} from '../../modals';

import { MoreMenuProps } from './more-menu.definition';

export const MoreMenu = ({
  entity,
  menuConfig,
  dispatches,
}: MoreMenuProps): ReactElement<MoreMenuProps> => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <MenuDropdown
        menuItems={[
          {
            text: 'edit',
            icon: { icon: 'pencil', ariaLabel: 'edit', fill: FillType.OUTLINE },
            onClick: () => setOpenModal('edit-list'),
          },
          {
            text: 'delete',
            colour: ColourType.ERROR,
            icon: { icon: 'bin', ariaLabel: 'delete', fill: FillType.OUTLINE },
            onClick: () => setOpenModal('confirm-delete'),
          },
        ]}
        {...menuConfig}
      />
      <Modal
        isOpen={openModal === 'edit-list'}
        onRequestClose={() => setOpenModal(null)}
        modalTitle="Edit List"
      >
        <EntityModal
          type={EntityModalType.EDIT}
          entity={entity}
          dispatches={dispatches}
          onClose={() => setOpenModal(null)}
        />
      </Modal>
      <Modal
        isOpen={openModal === 'confirm-delete'}
        onRequestClose={() => setOpenModal(null)}
        modalTitle="Edit List"
      >
        <ConfirmModal
          type={ConfirmModalType.DELETE}
          entity={entity}
          title="Are you sure?"
          description=""
          onClose={() => setOpenModal(null)}
          dispatches={dispatches}
        />
      </Modal>
    </>
  );
};
