import { useDispatch } from 'react-redux';
import { ActionsParam } from '../store/types';

const useDispatchedActions = (actions: ActionsParam): ActionsParam => {
    const dispatch = useDispatch();
    return Object.entries(actions).reduce(
        (acc, [key, action]) => ({
            ...acc,
            [key]: (...args: any) => {
                const actionArgs = action(...args);
                return dispatch(actionArgs);
            },
        }),
        {}
    );
};

export default useDispatchedActions;
