import { createContext, Dispatch, useContext } from 'react';
import { FORCE_UPDATE_STATE_LIMIT_TO_AVOID_HUGE_NUMBER_IN_RAM } from '../dev/hooks/_conf/consts';

interface AppState {
  mutator: number;
}

type AppAction = { event: 'FORCE_UPDATE' };

interface AppCtx {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}

const initialState: AppState = {
  mutator: 1
};

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.event) {
    case 'FORCE_UPDATE':
      return { ...state, mutator: (state.mutator + 1) % FORCE_UPDATE_STATE_LIMIT_TO_AVOID_HUGE_NUMBER_IN_RAM };
    default:
      return state;
  }
};

export const AppContext = createContext<AppCtx>({
  state: initialState,
  dispatch: () => null
});

export const useAppContext = () => useContext(AppContext);
export default AppContext;
