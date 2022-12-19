import { ReactElement, useMemo, useState } from 'react';

import { FillType } from '@sam/icons';

import { MenuDropdown, MenuItemProps, Modal } from '../../../atoms';
import {
  ConfirmModal,
  ConfirmModalType,
  EntityModal,
  EntityModalType,
} from '../../modals';

import { MoreMenuProps } from './more-menu.definition';
import { ColourType, isGift, isList, isWorkshop } from '@sam/types';

export const MoreMenu = ({
  entity,
  menuConfig,
  dispatches,
}: MoreMenuProps): ReactElement<MoreMenuProps> => {
  const [openModal, setOpenModal] = useState<
    'edit-list' | 'confirm-delete' | null
  >(null);

  const menuItems: MenuItemProps[] = useMemo(() => {
    const items: MenuItemProps[] = [
      {
        text: 'edit',
        icon: { icon: 'pencil', ariaLabel: 'edit', fill: FillType.OUTLINE },
        onClick: () => setOpenModal('edit-list'),
      },
    ];

    const canDelete: boolean =
      isWorkshop(entity) || isList(entity) || isGift(entity);

    if (canDelete) {
      items.push({
        text: 'delete',
        colour: ColourType.ERROR,
        icon: {
          icon: 'bin',
          ariaLabel: 'delete',
          fill: FillType.OUTLINE,
        },
        onClick: () => setOpenModal('confirm-delete'),
      });
    }

    return items;
  }, [entity]);

  return (
    <>
      <MenuDropdown menuItems={menuItems} {...menuConfig} />
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
      {(isWorkshop(entity) || isList(entity) || isGift(entity)) && (
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
      )}
    </>
  );
};
