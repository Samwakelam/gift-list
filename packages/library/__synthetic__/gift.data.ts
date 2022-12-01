import { Gift } from '@sam/types';

export const mockGiftData: Gift = {
  id: 'test-gift-id',
  name: 'Racing Roasties',
  lookupKey:
    '#owner:test-owner-id-1;workshop:test-workshop-id;list:test-list-id;',
  createdAt: new Date(),
  properties: {},
  description: null,
  visibility: {
    isVisible: true,
    sharedWith: [],
  },
};
