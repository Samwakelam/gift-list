import { tw } from 'twind';

import { NoResults, Placeholder, SlideMenu, TopBar } from '../../components';
import { MoreMenu } from '../../components/molecules/menus';

import { ListBuilderProps } from './list-builder.definition';
import { ListBuilderProvider, useListBuilder } from './list-builder.view-model';

import { NewGiftDrawer } from './_partials/new-gift-drawer.component';

import * as S from './list-builder.styles';

export const ListBuilderComponent = ({}: ListBuilderProps) => {
  const { state, handlers } = useListBuilder();

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
      />
      <div className={tw(S.ContentContainerCss)}>
        {state.list && (
          <>
            <TopBar
              entity={state.list}
              menu={
                <MoreMenu
                  entity={state.list}
                  dispatches={{ onRemove: () => {} }}
                />
              }
            >
              <NewGiftDrawer />
            </TopBar>
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
              <Placeholder>
                <NewGiftDrawer />
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
