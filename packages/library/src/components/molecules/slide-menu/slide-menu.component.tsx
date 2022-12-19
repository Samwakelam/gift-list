import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import { tw } from 'twind';

import { Button, ButtonVariant, SlideMenuLink } from '../../atoms';

import { SlideMenuProps } from './slide-menu.definition';

import * as S from './slide-menu.styles';

export const SlideMenu = ({
  subTitle,
  title,
  links,
  children,
  isOpen,
  isFixed = false,
  onRequestClose,
}: SlideMenuProps) => {
  const modal = useRef(null);

  useEffect(() => {
    // FIXES Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}
    // This is due to using serverside rendering.
    ReactModal.setAppElement('#slide-menu-parent');
  }, []);

  return (
    <aside id="slide-menu-parent" className={tw(S.SlideMenuParentCss)}>
      <ReactModal
        ref={modal}
        className={tw(
          S.SlideMenuCss,
          isFixed && S.SlideMenuFixedCss,
          isOpen && S.BeforeCloseCss
        )}
        overlayClassName={tw(
          S.OverlayCss,
          S.OverlayStyles,
          isFixed && S.OverlayFixedCss
        )}
        isOpen={true}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={250}
        parentSelector={() => document.querySelector('#slide-menu-parent')!}
        data-open={isOpen}
        aria-hidden={isOpen}
      >
        <div className={tw(S.TitleCss)}>
          <p>{subTitle}</p>
          <p>{title}</p>
        </div>
        <Button
          className={tw(S.CloseTrigger, isFixed && S.CloseTriggerFixedCss)}
          icon={{ icon: 'cross', ariaLabel: 'close menu' }}
          onClick={() => onRequestClose()}
          buttonVariant={ButtonVariant.NONE}
        />
        <div className={tw(S.LinksContainerCss)}>
          {links.map((link, index) => (
            <SlideMenuLink key={`${index}-${link.href}`} {...link} />
          ))}
        </div>
        <div>{children}</div>
      </ReactModal>
    </aside>
  );
};
