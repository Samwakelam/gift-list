import { ReactElement, useState } from 'react';
import { tw } from 'twind';

import {
  Button,
  Card,
  SlideOutDrawer,
  WidgetCard,
  WidgetCardType,
} from '../../../../components';

import { useGiftStudio } from '../../gift-studio.view-model';

import { WidgetDrawerProps } from './widget-drawer.definition';

import * as S from './widgets-drawer.styles';

export const WidgetDrawer = ({
  widgets,
  usedWidgets,
}: WidgetDrawerProps): ReactElement<WidgetDrawerProps> => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const { state, handlers } = useGiftStudio();

  const isSuccess = (result: boolean) => {
    setIsDrawerOpen(!result);
  };

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
        className={tw(S.DrawerCss)}
      >
        <div className={tw(S.WidgetsCardDrawerCss)}>
          {widgets.map((widget) => (
            <Card key={`${widget.name}-${widget.key}`}>
              <WidgetCard
                widget={widget}
                type={WidgetCardType.ICON}
                disabled={usedWidgets.includes(widget.key)}
                dispatches={{
                  onAdd: (widget) => handlers.addWidget(widget, isSuccess),
                }}
              />
            </Card>
          ))}
        </div>
      </SlideOutDrawer>
    </>
  );
};
