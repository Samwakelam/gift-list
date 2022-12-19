import { css, keyframes, theme } from 'twind/css';
import tokens from '../../../styles/tokens';

const SlideIn = keyframes({
  from: {
    transform: 'translatex(-100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const SlideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(-100%)',
  },
});

export const SlideMenuParentCss = css({
  '&': {
    height: '100%',
  },
});

export const CloseTrigger = css({
  '&': {
    position: 'absolute',
    right: theme('spacing.16'),
    top: theme('spacing.16'),
  },
});

export const CloseTriggerFixedCss = css({
  '@screen md': {
    display: 'none',
  },
});

export const SlideMenuStyles = `
  bg-neutral-300
  w-80
  h-full
`;

export const SlideMenuCss = css({
  '&': {
    position: 'relative',
    height: '100vh',
    width: '80%',
    padding: theme('spacing.16'),
    backgroundColor: theme('colors.neutral.300'),
    borderTopRightRadius: theme('spacing.16'),
    borderBottomRightRadius: theme('spacing.16'),
    boxShadow: theme('boxShadow.drawer'),
    transform: 'translateX(-100%)',
    animationDirection: 'forwards',
    animationDuration: '250ms',
    animationName: SlideOut,
    pointerEvents: 'all',
  },
  '@media (min-width: 500px)': {
    width: '320px',
  },
});

export const SlideMenuFixedCss = css({
  '@screen md': {
    borderTopRightRadius: 'unset',
    borderBottomRightRadius: 'unset',
    boxShadow: 'unset',
    transform: 'translateX(0)',
    animation: 'unset',
  },
});

export const BeforeCloseCss = css({
  '&': {
    transform: 'translateX(0)',
    animationDirection: 'forwards',
    animationDuration: '250ms',
    animationName: SlideIn,
  },
});

export const OverlayStyles = `
   
`;

export const OverlayCss = css({
  '&': {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 1,
  },
});

export const OverlayFixedCss = css({
  '@screen md': {
    display: 'block',
    position: 'relative',
  },
});

export const TitleCss = css({
  '&': {
    display: 'block',
    backgroundColor: 'unset',
    color: theme('colors.neutral.900'),
    padding: `${tokens.spacing[8]} ${tokens.spacing[32]}`,

    '&>p': {
      textTransform: 'uppercase',
      fontWeight: '700',
    },

    '&>p:first-child': {
      fontSize: tokens.text.body.small,
    },
  },
});

export const LinksContainerCss = css({});
