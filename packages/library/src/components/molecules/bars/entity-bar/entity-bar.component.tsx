import { tw } from 'twind';

import { isOwner } from '@sam/types';

import { MoreMenu } from '../../menus';

import { EntityBarProps } from './entity-bar.definition';

import * as S from './entity-bar.styles';

export const EntityBar = ({
  entity,
  children,
  menu,
  title,
}: EntityBarProps) => {
  return (
    <div className={tw(S.EntityBarCss)}>
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
          <h1>{entity ? entity.name : title ? title : 'Undefined'}</h1>
        </div>
      </div>
      <div className={tw(S.ContentCss)}>{children}</div>
    </div>
  );
};
