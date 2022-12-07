import React from 'react';

import { TopBar } from '../../../src';
import { mockListData } from '../../../__synthetic__/list.data';

export default () => {
  return <TopBar entity={mockListData} />;
};
