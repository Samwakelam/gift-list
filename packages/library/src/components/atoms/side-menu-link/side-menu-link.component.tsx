import { tw } from 'twind';
import { Link } from 'react-router-dom';

import { SlideMenuLinkProps } from './side-menu-link.definition';

import * as S from './side-menu-link.styles';

export const SlideMenuLink = ({
  href,
  isActive,
  label,
}: SlideMenuLinkProps) => {
  return (
    <Link
      to={href}
      className={tw(S.SlideMenuLinkCss, isActive && S.SlideMenuLinkActiveCss)}
    >
      {label}
    </Link>
  );
};
