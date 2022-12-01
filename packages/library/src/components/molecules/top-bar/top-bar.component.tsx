import { tw } from 'twind';

import { isOwner } from '@sam/types';

import { TopBarProps } from './top-bar.definition';

import * as S from './top-bar.styles';

export const TopBar = ({ entity, children, menu }: TopBarProps) => {
  if (!entity) return null;

  return (
    <div className={tw(S.TopBarCss)}>
      <div className={tw(S.TitlesCss)}>
        {isOwner(entity) && <h6>Welcome</h6>}
        {!isOwner(entity) && entity.description && <p>{entity.description}</p>}
        <div className={tw(S.HeadingCss)}>
          <div className={tw(S.MenuContainerCss)}>{menu && menu}</div>
          <h1>{entity.name}</h1>
        </div>
      </div>
      <div className={tw(S.ContentCss)}>{children}</div>
    </div>
  );
};
