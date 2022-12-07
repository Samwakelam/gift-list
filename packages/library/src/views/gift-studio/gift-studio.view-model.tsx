import { createContext } from 'react';
import { GiftStudioHandlers, GiftStudioState } from './gift-studio.definition';

export const GiftStudioContext = createContext<{
    state: GiftStudioState;
    handlers: GiftStudioHandlers;
}>({ state: {}, handlers: {} });

export const useGiftStudio = () => {
    return createContext(GiftStudioContext);
};
