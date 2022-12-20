import { useState } from 'react';
import { tw } from 'twind';

import { Gift } from '@sam/types';
import { Icon } from '@sam/icons';

import {
  Bar,
  Button,
  ButtonVariant,
  EntityBar,
  SlideMenu,
} from '../../components';

import { WidgetDrawer, WidgetRenderer, widgets } from './_partials';
import { GiftStudioProps, SaveContainerProps } from './gift-studio.definition';
import { GiftStudioProvider, useGiftStudio } from './gift-studio.view-model';

import * as S from './gift-studio.styles';

export const GiftStudioComponent = ({}: GiftStudioProps) => {
  const { state, handlers } = useGiftStudio();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <main className={tw(S.GiftBuilderCss)}>
      <SlideMenu
        subTitle={'Gift List'}
        title={'List Builder'}
        links={[
          { label: 'Workshops', href: '/', isActive: false },
          { label: 'List Manager', href: '/', isActive: false },
          { label: 'List Builder', href: '/', isActive: false },
          { label: 'Gift Studio', href: '/', isActive: true },
        ]}
        isOpen={menuOpen}
        onRequestClose={() => setMenuOpen(false)}
      />

      <div className={tw(S.ContentContainerCss)}>
        <Bar menu={{ isFixed: false, onClick: () => setMenuOpen(true) }}>
          <EntityBar
            fullWidth={true}
            entity={state.gift}
            menu={{
              dispatches: {
                onEdit: (editedEntity: any, isSuccess: any) => {
                  handlers.editGift(
                    [
                      { widgetKey: 'name', value: editedEntity.name },
                      {
                        widgetKey: 'description',
                        value: editedEntity.description,
                      },
                    ],
                    isSuccess
                  );
                },
              },
            }}
          >
            <SaveContainer {...handlers.resolveSaveContainer()} />
            <Button
              buttonVariant={ButtonVariant.PRODUCT}
              startIcon={{ icon: 'download', ariaLabel: 'save' }}
              onClick={(e) => {}}
            >
              Save
            </Button>
            <WidgetDrawer
              widgets={widgets}
              usedWidgets={state.selectedWidgets}
            />
          </EntityBar>
        </Bar>

        <div className={tw(S.GiftContainerCss)}>
          {state.selectedWidgets.map((widget) => (
            <WidgetRenderer
              key={`widget-${widget}`}
              widget={widgets.find((_widget) => _widget.key === widget)}
              value={state.gift[widget as keyof Omit<Gift, 'id'>] as string}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export const GiftStudio = ({ userId }: { userId: string }) => {
  return (
    <GiftStudioProvider userId={userId}>
      <GiftStudioComponent />
    </GiftStudioProvider>
  );
};

const SaveContainer = ({ message, icon, className }: SaveContainerProps) => {
  return (
    <div className={tw(S.SavingContainerCss, className)}>
      {icon && <Icon {...icon} />}
      <h5>{message}</h5>
    </div>
  );
};
