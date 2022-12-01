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
}: SlideMenuProps) => {
  const modal = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // FIXES Warning: react-modal: App element is not defined. Please use Modal.setAppElement(el) or set appElement={el}
    // This is due to using serverside rendering.
    ReactModal.setAppElement('#slide-menu-parent');
  }, []);

  return (
    <aside id="slide-menu-parent" className={tw(S.SlideMenuParentCss)}>
      <Button
        className={tw(S.OpenTrigger)}
        icon={{ icon: 'burger', ariaLabel: 'open menu' }}
        onClick={() => setIsOpen(true)}
        buttonVariant={ButtonVariant.NONE}
      />
      <ReactModal
        ref={modal}
        className={tw(S.SlideMenuCss, isOpen && S.BeforeCloseCss)}
        overlayClassName={tw(S.OverlayCss, S.OverlayStyles)}
        isOpen={true}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={250}
        parentSelector={() => document.querySelector('#slide-menu-parent')!}
        data-open={isOpen}
      >
        <div className={tw(S.TitleCss)}>
          <p>{subTitle}</p>
          <p>{title}</p>
        </div>
        <Button
          className={tw(S.CloseTrigger)}
          icon={{ icon: 'cross', ariaLabel: 'close menu' }}
          onClick={() => setIsOpen(false)}
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
