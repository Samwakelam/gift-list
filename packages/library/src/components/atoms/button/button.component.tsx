import { apply, CSSRules, Directive, tw } from 'twind';

import { Icon } from '@sam/icons';

import { ButtonProps, ButtonVariant } from './button.definition';

import * as S from './button.styles';

export const Button = ({
  buttonVariant = ButtonVariant.PRIMARY,
  children,
  className,
  onClick,
  icon,
  startIcon,
  endIcon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={tw(
        apply(resolveButtonVariant(buttonVariant), icon && S.IconButtonCss),
        className
      )}
    >
      {startIcon && <Icon {...startIcon} />}
      {children && children}
      {icon && <Icon {...icon} />}
      {endIcon && <Icon {...endIcon} />}
    </button>
  );
};

const resolveButtonVariant = (
  variant: ButtonVariant
): Directive<CSSRules> | Directive<CSSRules>[] => {
  switch (variant) {
    case ButtonVariant.SECONDARY: {
      return [S.buttonCss, S.SecondaryButtonCss];
    }
    case ButtonVariant.TERTIARY: {
      return [S.buttonCss, S.TertiaryButtonCss];
    }
    case ButtonVariant.NONE: {
      return S.UnstyledButtonCss;
    }
    default: {
      return S.buttonCss;
    }
  }
};
