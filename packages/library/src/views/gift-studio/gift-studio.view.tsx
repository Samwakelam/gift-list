import { tw } from 'twind';
import { TopBar } from '../../components';

import { GiftStudioProps } from './gift-studio.definition';

import * as S from './gift-studio.styles';

export const GiftStudioComponent = ({}: GiftStudioProps) => {
  return (
    <main className={tw(S.GiftBuilderCss)}>
      <div className={tw(S.ContentContainerCss)}>
        <TopBar entity={null} />
        <div className={tw(S.ListContainerCss)}>hello</div>
      </div>
    </main>
  );
};

export const GiftStudio = () => {
  return <GiftStudioComponent />;
};
