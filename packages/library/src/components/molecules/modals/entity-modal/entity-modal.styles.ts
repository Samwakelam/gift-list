import { css } from 'twind/css';

export const EntityModalCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
  },
  '@screen sm': {
    alignItems: 'flex-end',
  },
});
