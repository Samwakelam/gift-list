import { AddConnectionModal, Modal } from '../../../../src';

export default {
  ['Default']: () => {
    return (
      <Modal
        isOpen={true}
        onRequestClose={() => {}}
        modalTitle="Add Connection"
      >
        <AddConnectionModal onClose={() => {}} />
      </Modal>
    );
  },
};
