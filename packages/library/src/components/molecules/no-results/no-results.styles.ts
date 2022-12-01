import { css, theme } from 'twind/css';

export const NoResultsCss = css({
  '&': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme('spacing.8'),
  },
});

export const TitleStyles = ``;

export const TitleCSS = css({
  '&': {
    textTransform: 'uppercase',
  },
});

export const DescriptionStyles = ``;

export const DescriptionCSS = css({
  '&': {
    color: theme('colors.neutral.500'),
    maxWidth: theme('spacing.208'),
    textAlign: 'center',
  },
});
