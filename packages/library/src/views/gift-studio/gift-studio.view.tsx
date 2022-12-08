import { tw } from 'twind';
import { Bar, EntityBar } from '../../components';

import { GiftStudioProps } from './gift-studio.definition';
import { GiftStudioProvider, useGiftStudio } from './gift-studio.view-model';
import { WidgetDrawer } from './_partials/widget-drawer';

import * as S from './gift-studio.styles';

export const GiftStudioComponent = ({}: GiftStudioProps) => {
  const { state, handlers } = useGiftStudio();

  return (
    <main className={tw(S.GiftBuilderCss)}>
      <Bar menu={{ isFixed: false, onClick: () => {} }}>
        <EntityBar entity={null} title="new Gift">
          <WidgetDrawer />
        </EntityBar>
      </Bar>

      <div className={tw(S.GiftContainerCss)}></div>
    </main>
  );
};

export const GiftStudio = () => {
  return (
    <GiftStudioProvider>
      <GiftStudioComponent />
    </GiftStudioProvider>
  );
};
