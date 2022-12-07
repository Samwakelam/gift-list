import React from 'react';

import { EntityModal, EntityModalType, Modal } from '../../../../src';
import { mockListData } from '../../../../__synthetic__/list.data';

export default {
  ['Create']: () => {
    return (
      <Modal isOpen={true} onRequestClose={() => {}} modalTitle="Create List">
        <EntityModal
          type={EntityModalType.CREATE}
          entity={null}
          dispatches={{}}
          onClose={() => {}}
        />
      </Modal>
    );
  },
  ['Edit']: () => {
    return (
      <Modal isOpen={true} onRequestClose={() => {}} modalTitle="Edit List">
        <EntityModal
          type={EntityModalType.EDIT}
          entity={mockListData}
          dispatches={{}}
          onClose={() => {}}
        />
      </Modal>
    );
  },
};
