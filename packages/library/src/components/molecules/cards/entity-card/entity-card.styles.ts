import { css, CSSRules, Directive, theme } from 'twind/css';

import tokens from '../../../../styles/tokens';

export const EntityCardStyles = ``;

export const EntityCardCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    gap: theme('spacing.8'),
    alignItems: 'flex-start',
    position: 'relative',
  },
});

export const ContentCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.8'),
  },
});

export const ContentHiddenCss = css({
  '&': {
    opacity: '50%',
  },
});

export const ButtonBoxCss = css({
  '&': {
    position: 'absolute',
    right: '-36px',
    bottom: '-36px',
    display: 'flex',
    gap: theme('spacing.8'),
  },
});

export const IconButtonCss = css({
  '&': {
    paddingLeft: theme('spacing.0'),
    paddingRight: theme('spacing.0'),
    height: '32px',
    width: '32px',
    display: 'flex',
    justifyContent: 'center',
  },
  '& i': {
    transform: 'scale(75%)',
  },
  '& svg': {
    height: 'unset',
  },
});

export const IconCss = css({
  '&': {
    display: 'flex',
    alignSelf: 'center',
  },
  '& svg': { height: '1.3rem' },
});

export const TitlesCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    gap: theme('spacing.8'),
  },

  '@media (min-width: 500px)': {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'baseline',
    gap: theme('spacing.8'),
  },

  '@screen md': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    gap: theme('spacing.8'),
  },

  '@screen lg': {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'baseline',
    gap: theme('spacing.8'),
  },

  '&>h6': {
    color: theme('colors.neutral.500'),
    fontSize: tokens.text.heading[14],
  },
});

export const DescriptionCss: Directive<CSSRules> = css({
  '&': {
    color: theme('colors.neutral.500'),
    fontSize: tokens.text.body.small,
    marginLeft: '22px',
  },
});

export const RelativeDateCss: Directive<CSSRules> = css({
  '&': {
    color: theme('colors.neutral.500'),
    fontSize: tokens.text.body.small,
  },

  '&>i': {
    display: 'inline-flex',
    alignItems: 'flex-end',
    marginRight: theme('spacing.4'),
    transform: 'translateY(1px)',
    '& svg': {
      height: '14px',
    },
    '& path': {
      fill: theme('colors.neutral.500'),
    },
  },
});

export const ButtonBorderCss = css({
  '&': {
    borderColor: theme('colors.orange.300'),
    borderWidth: theme('spacing.2'),
    borderStyle: 'solid',
  },
});

export const ButtonBorderGrayCss = css({
  '&': {
    borderColor: theme('colors.neutral.400'),
  },
});
