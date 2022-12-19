import { useState } from 'react';

import { Hook } from '@sam/types';

import {
  WidgetRendererHandlers,
  WidgetRendererState,
} from './widget-renderer.definition';

export const useWidgetRenderer = (): Hook<
  WidgetRendererState,
  WidgetRendererHandlers
> => {
  const [state, setState] = useState<WidgetRendererState>({
    editModalIsOpen: false,
  });

  const onModalRequest: WidgetRendererHandlers['onModalRequest'] = (
    isOpen: boolean
  ) => {
    setState((prev) => ({
      ...prev,
      editModalIsOpen: isOpen,
    }));
  };

  return {
    state,
    handlers: {
      onModalRequest,
    },
  };
};
