// UIStateProvider.tsx
import React, { useReducer } from 'react';
import UIStateContext, { UIState } from './UIStateContext';

interface Props {
  children: React.ReactNode;
}

const UIStateProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: UIState, action: any) => {
      switch (action.type) {
        case 'TOGGLE_THEME':
          return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
          };
        case 'TOOGLE_DRAWER':
          return {
            ...state,
            drawerOpen: state.drawerOpen === false ? true : false,
          };
        default:
          return state;
      }
    },
    { theme: 'light', toggleTheme: () => {} }
  );

  return (
    <UIStateContext.Provider
      value={{
        ...state,
        toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
        toggleDrawer: () => dispatch({ type: 'TOOGLE_DRAWER' }),
      }}
    >
      {children}
    </UIStateContext.Provider>
  );
};

export default UIStateProvider;
