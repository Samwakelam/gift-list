import {
    createContext,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react';

import { mockListData } from '../../../__synthetic__/list.data';
import { useListBuilderService } from '../../lib/list-builder/list-builder.service';

import {
    ListBuilderHandlers,
    ListBuilderState,
} from './list-builder.definition';

export const ListBuilderContext = createContext<{
    state: ListBuilderState;
    handlers: ListBuilderHandlers;
}>({ state: { list: null, isLoading: true }, handlers: {} });

export const useListBuilder = () => {
    return useContext(ListBuilderContext);
};

export const ListBuilderProvider = ({
    children,
}: {
    children: ReactElement;
}) => {
    const listBuilderService = useListBuilderService(mockListData.id);

    const [state, setState] = useState<ListBuilderState>({
        list: null,
        isLoading: true,
    });

    const fetchList = async () => {
        try {
            const list = await listBuilderService.getList();

            setState((prev) => ({
                ...prev,
                list,
            }));
        } catch (e) {}
    };

    useEffect(function onMount() {
        const onMount = async () => {
            await Promise.all([fetchList()]);
            setState((prev) => ({ ...prev, isLoading: false }));
        };

        onMount();
    }, []);

    return (
        <ListBuilderContext.Provider
            value={{
                state: { ...state },
                handlers: {},
            }}
        >
            {children}
        </ListBuilderContext.Provider>
    );
};
