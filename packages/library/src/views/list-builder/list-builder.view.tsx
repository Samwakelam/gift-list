import { useState } from 'react';
import { tw } from 'twind';

import {
  NoResults,
  Placeholder,
  SlideMenu,
  EntityBar,
  Bar,
} from '../../components';

import { ListBuilderProps } from './list-builder.definition';
import { ListBuilderProvider, useListBuilder } from './list-builder.view-model';

import { GiftDrawer } from './_partials/gift-drawer.component';

import * as S from './list-builder.styles';

export const ListBuilderComponent = ({}: ListBuilderProps) => {
  const { state, handlers } = useListBuilder();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <main className={tw(S.ListBuilderCss)}>
      <SlideMenu
        subTitle={'Gift List'}
        title={'List Builder'}
        links={[
          { label: 'Workshops', href: '/', isActive: false },
          { label: 'List Manager', href: '/', isActive: false },
          { label: 'List Builder', href: '/', isActive: true },
        ]}
        isOpen={menuOpen}
        onRequestClose={() => setMenuOpen(false)}
        isFixed
      />
      <div className={tw(S.ContentContainerCss)}>
        {state.list && (
          <>
            <Bar menu={{ onClick: () => setMenuOpen(true), isFixed: true }}>
              <EntityBar
                entity={state.list}
                menu={{
                  dispatches: { onRemove: () => {} },
                }}
              >
                <GiftDrawer />
              </EntityBar>
            </Bar>
            <div className={tw(S.ListContainerCss)}>
              {state.list.gifts.length > 0 ? (
                state.list.gifts.map((gift) => {
                  return <div />;
                })
              ) : (
                <NoResults
                  title="No Gifts"
                  description="Add some gift ideas to get started"
                />
              )}
              <Placeholder className={tw(S.PlaceholderCss)}>
                <GiftDrawer />
              </Placeholder>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export const ListBuilder = () => {
  return (
    <ListBuilderProvider>
      <ListBuilderComponent />
    </ListBuilderProvider>
  );
};
