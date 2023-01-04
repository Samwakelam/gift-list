import { ListBuilder } from '../../src';
import { mockListData } from '../../__synthetic__/list.data';

const ListBuilderFixture = () => {
  return <ListBuilder listId={mockListData._id} />;
};

export default ListBuilderFixture;
