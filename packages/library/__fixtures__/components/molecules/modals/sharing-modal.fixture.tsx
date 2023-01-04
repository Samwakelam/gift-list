import { Owner } from '@sam/types';

import { Modal } from '../../../../src';
import { SharingModal } from '../../../../src/components/molecules/modals/sharing-modal/sharing-modal.component';

import { mockOwnerData } from '../../../../__synthetic__/owner.data';

export default {
  ['Default']: () => {
    return (
      <Modal isOpen={true} onRequestClose={() => {}} modalTitle="Other Users">
        <SharingModal
          allUsers={mockOwnerData as unknown as Owner[]}
          checkedUsers={[]}
          dispatches={{}}
          onClose={() => {}}
        />
      </Modal>
    );
  },
};
