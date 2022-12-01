import { Button, NoResults } from '../../../src';

export default {
  ['Basic']: (
    <NoResults title={'Title'} description={'Small descriptive sentence'} />
  ),
  ['With call to action']: (
    <NoResults title={'Title'} description={'Small descriptive sentence'}>
      <Button>Button</Button>
    </NoResults>
  ),
};
