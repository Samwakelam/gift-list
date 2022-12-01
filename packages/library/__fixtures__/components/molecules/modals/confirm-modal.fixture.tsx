import { ConfirmModal, ConfirmModalType, Modal } from '../../../../src';

import { mockListData } from '../../../../__synthetic__/list.data';

export default {
  ['Delete']: () => {
    return (
      <Modal isOpen={true} onRequestClose={() => {}}>
        <ConfirmModal
          type={ConfirmModalType.DELETE}
          item={mockListData}
          title="Are you sure?"
          description="This will delete this item."
          onClose={() => {}}
          dispatches={{}}
        />
      </Modal>
    );
  },
};
