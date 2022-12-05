import { ReactElement } from 'react';
import { tw } from 'twind';

import { Workshop } from '@sam/types';

import {
  Card,
  EntityCard,
  NoResults,
  SlideMenu,
  TopBar,
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

    return (
      <div className={tw(S.WorkshopManagerCss)}>
        <SlideMenu links={[]} title="Workshops" subTitle="Gift List">
          <>
            {state.owner && (
              <OwnerProfile owner={state.owner} users={state.connections} />
            )}
          </>
        </SlideMenu>

        <div className={tw(S.ContentContainerCss)}>
          <TopBar entity={state.owner}>
            <CreateWorkshopModal />
          </TopBar>
          <div className={tw(S.ListContainerCss)}>
            {state.workshops.length > 0 ? (
              state.workshops.map((workshop: Workshop) => {
                return (
                  <Card key={workshop.id}>
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
      </div>
    );
  };

export const WorkshopManager = ({}) => {
  return (
    <WorkshopManagerProvider>
      <WorkshopManagerComponent />
    </WorkshopManagerProvider>
  );
};
