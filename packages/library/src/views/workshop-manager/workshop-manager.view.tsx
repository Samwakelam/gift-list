import { ReactElement, useState } from 'react';
import { tw } from 'twind';

import { Owner, Workshop } from '@sam/types';

import {
  Card,
  EntityCard,
  NoResults,
  SlideMenu,
  EntityBar,
  Bar,
} from '../../components';

import { OwnerProfile } from './_partials/owner-profile';
import { CreateWorkshopModal } from './_partials/create-workshop-modal.component';

import { WorkshopManagerProps } from './workshop-manager.definition';
import {
  useWorkshopManager,
  WorkshopManagerProvider,
} from './workshop-manager.view-model';

import * as S from './workshop-manager.styles';

export const WorkshopManagerComponent =
  ({}: WorkshopManagerProps): ReactElement<WorkshopManagerProps> => {
    const { state, handlers } = useWorkshopManager();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
      <main className={tw(S.WorkshopManagerCss)}>
        <SlideMenu
          links={[
            {
              label: 'Workshops',
              href: handlers.resolveLink(),
              isActive: true,
            },
          ]}
          title="Workshops"
          subTitle="Gift List"
          isOpen={menuOpen}
          onRequestClose={() => setMenuOpen(false)}
          isFixed
        >
          <>
            {state.owner && (
              <OwnerProfile owner={state.owner} users={state.connections} />
            )}
          </>
        </SlideMenu>

        <div className={tw(S.ContentContainerCss)}>
          {state.owner && (
            <Bar menu={{ onClick: () => setMenuOpen(true), isFixed: true }}>
              <EntityBar entity={state.owner}>
                <CreateWorkshopModal />
              </EntityBar>
            </Bar>
          )}
          <div className={tw(S.ListContainerCss)}>
            {state.workshops.length > 0 ? (
              state.workshops.map((workshop: Workshop) => {
                return (
                  <Card key={workshop._id}>
                    <EntityCard
                      allUsers={state.connections}
                      entity={workshop}
                      dispatches={{
                        onEdit: handlers.editWorkshop,
                        onRemove: handlers.removeWorkshop,
                      }}
                    />
                  </Card>
                );
              })
            ) : (
              <NoResults
                title="No Workshops"
                description=" There are no workshops to start working in"
              ></NoResults>
            )}
          </div>
        </div>
      </main>
    );
  };

export const WorkshopManager = ({ user }: { user: Owner }) => {
  return (
    <WorkshopManagerProvider user={user}>
      <WorkshopManagerComponent />
    </WorkshopManagerProvider>
  );
};
