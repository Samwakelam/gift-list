import { useState } from 'react';

import {
  Button,
  EntityModal,
  EntityModalType,
  Modal,
} from '../../../components';
import { useWorkshopManager } from '../workshop-manager.view-model';

export const CreateWorkshopModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {
    handlers: { addWorkshop, editWorkshop },
  } = useWorkshopManager();

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        startIcon={{ icon: 'plus', ariaLabel: 'plus' }}
      >
        Create Workshop
      </Button>
      <Modal
        modalTitle="Create Workshop"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <EntityModal
          type={EntityModalType.CREATE}
          entity={null}
          dispatches={{ onAdd: addWorkshop, onEdit: editWorkshop }}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};
