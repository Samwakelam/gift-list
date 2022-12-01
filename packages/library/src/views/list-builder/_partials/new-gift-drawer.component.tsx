import { useState } from 'react';

import { Button, SlideOutDrawer } from '../../../components';

export const NewGiftDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsDrawerOpen(true)}
        startIcon={{ icon: 'plus', ariaLabel: 'plus' }}
      >
        New Gift
      </Button>
      <SlideOutDrawer
        drawerTitle="Gifts Drawer"
        isOpen={isDrawerOpen}
        onRequestClose={() => setIsDrawerOpen(false)}
      >
        <div></div>
      </SlideOutDrawer>
    </>
  );
};
