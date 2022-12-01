import { useSelect } from 'react-cosmos/fixture';

import { Button, ButtonVariant } from '../../../src';

export default {
  ['Primary']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRIMARY}
      >
        Primary Button
      </Button>
    );
  },
  ['Secondary']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.SECONDARY}
      >
        Secondary Button
      </Button>
    );
  },
  ['Tertiary']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.TERTIARY}
      >
        Tertiary Button
      </Button>
    );
  },
  ['None']: () => {
    return (
      <Button onClick={() => alert('click')} buttonVariant={ButtonVariant.NONE}>
        Unstyled Button
      </Button>
    );
  },
  ['With Icon']: () => {
    const [Icon] = useSelect('Icon', {
      options: ['bin', 'clock', 'cross', 'pencil', 'plus'],
    });
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRIMARY}
        startIcon={{ icon: Icon, ariaLabel: 'plus' }}
      >
        Primary Button
      </Button>
    );
  },
};
