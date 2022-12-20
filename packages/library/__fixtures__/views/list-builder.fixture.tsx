import React from 'react';
import { ListBuilder } from '../../src';
import { mockListData } from '../../__synthetic__/list.data';

const ListBuilderFixture = () => {
  return <ListBuilder listId={mockListData.id} />;
};

export default ListBuilderFixture;
