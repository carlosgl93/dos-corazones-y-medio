import { UIState } from './UIStateContext';

interface Action {
  type: string;
}

const UIStateReducer = (state: UIState, action: Action): UIState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'TOOGLE_DRAWER':
      return {
        ...state,
        drawerOpen: state.drawerOpen,
      };
    default:
      return state;
  }
};

export default UIStateReducer;
