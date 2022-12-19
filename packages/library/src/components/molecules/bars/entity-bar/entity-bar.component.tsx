import { tw } from 'twind';

import { isOwner } from '@sam/types';

import { MoreMenu } from '../../menus';

import { EntityBarProps } from './entity-bar.definition';

import * as S from './entity-bar.styles';

export const EntityBar = ({
  entity,
  children,
  fullWidth = false,
  menu,
}: EntityBarProps) => {
  return (
    <div className={tw(S.EntityBarCss, fullWidth && S.FWEntityBarCss)}>
      <div className={tw(S.TitlesCss)}>
        {isOwner(entity) && <h6>Welcome</h6>}
        {!isOwner(entity) && entity && entity.description && (
          <p>{entity.description}</p>
        )}
        <div className={tw(S.HeadingCss)}>
          <div className={tw(S.MenuBoxCss)}>
            {menu && entity && !isOwner(entity) && (
              <MoreMenu entity={entity} dispatches={menu.dispatches} />
            )}
          </div>
          <h1>{entity.name}</h1>
        </div>
      </div>
      <div className={tw(S.ContentCss, fullWidth && S.FWContentCss)}>
        {children}
      </div>
    </div>
  );
};
