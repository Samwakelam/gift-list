import { TopBar } from '../../../src';
import { mockListData } from '../../../__synthetic__/list.data';

const TopBarFixture = () => {
  return <TopBar entity={mockListData} />;
};

export default TopBarFixture;
