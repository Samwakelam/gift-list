import { useState } from 'react';
import { Button, SlideOutDrawer } from '../../../components';

export const WidgetDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsDrawerOpen(true)}
        startIcon={{ icon: 'plus', ariaLabel: 'plus' }}
      >
        Add Widgets
      </Button>
      <SlideOutDrawer
        drawerTitle="Widget Drawer"
        isOpen={isDrawerOpen}
        onRequestClose={() => setIsDrawerOpen(false)}
      >
        <div></div>
      </SlideOutDrawer>
    </>
  );
};
