import { Card, EntityCard } from '../../../../src';
import { mockListData } from '../../../../__synthetic__/list.data';

export default {
  ['Required Card']: () => {
    return (
      <Card>
        <EntityCard allUsers={[]} entity={mockListData} dispatches={{}} />
      </Card>
    );
  },
  ['Card with description']: () => {
    return (
      <Card>
        <EntityCard
          allUsers={[]}
          entity={{
            ...mockListData,
            description:
              'I am a description that will describe what the list or workshop is about.',
          }}
          dispatches={{}}
        />
      </Card>
    );
  },
};
