import { useState } from 'react';

import {
  Button,
  EntityModal,
  EntityModalType,
  Modal,
} from '../../../components';
import { useListManager } from '../list-manager.view-model';

export const CreateListModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    handlers: { addList },
  } = useListManager();

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        startIcon={{ icon: 'plus', ariaLabel: 'plus' }}
      >
        Create List
      </Button>
      <Modal
        modalTitle="Create List"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <EntityModal
          type={EntityModalType.CREATE}
          entity={null}
          dispatches={{ onAdd: addList }}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};
