import { ReactElement, useState } from 'react';
import { tw } from 'twind';

import { Workshop } from '@sam/types';

import {
  EntityCard,
  NoResults,
  SlideMenu,
  EntityBar,
  Card,
  Bar,
} from '../../components';

import { ListManagerProps } from './list-manager.definition';
import { ListManagerProvider, useListManager } from './list-manager.view-model';

import { CreateListModal } from './_partials/create-list-modal.component';

import * as S from './list-manager.styles';

export const ListManagerComponent =
  ({}: ListManagerProps): ReactElement<ListManagerProps> => {
    const { state, handlers } = useListManager();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
      <main className={tw(S.ListManagerCss)}>
        <SlideMenu
          subTitle={'Gift List'}
          title={'List Manager'}
          links={[
            {
              label: 'Workshops',
              href: handlers.resolveLink('workshop-manager'),
              isActive: false,
            },
            {
              label: 'List Manager',
              href: handlers.resolveLink('list-manager'),
              isActive: true,
            },
          ]}
          isOpen={menuOpen}
          onRequestClose={() => setMenuOpen(false)}
          isFixed
        />
        <div className={tw(S.ContentContainerCss)}>
          {state.workshop && (
            <>
              <Bar menu={{ onClick: () => setMenuOpen(true), isFixed: true }}>
                <EntityBar
                  entity={state.workshop}
                  menu={{
                    dispatches: {
                      onRemove: handlers.removeWorkshop,
                      onEdit: handlers.editWorkshop,
                    },
                  }}
                >
                  <CreateListModal />
                </EntityBar>
              </Bar>
              <div className={tw(S.ListContainerCss)}>
                {state.workshop.lists.length > 0 ? (
                  state.workshop.lists.map((list) => {
                    return (
                      <Card key={list._id}>
                        <EntityCard
                          allUsers={state.connections}
                          entity={list}
                          dispatches={{
                            onEdit: handlers.editList,
                            onRemove: handlers.removeList,
                          }}
                        />
                      </Card>
                    );
                  })
                ) : (
                  <NoResults
                    title="No Lists"
                    description=" There are no lists in this workshop"
                  >
                    <CreateListModal />
                  </NoResults>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    );
  };

export const ListManager = ({ workshop }: { workshop: Workshop }) => {
  return (
    <ListManagerProvider workshop={workshop}>
      <ListManagerComponent />
    </ListManagerProvider>
  );
};
