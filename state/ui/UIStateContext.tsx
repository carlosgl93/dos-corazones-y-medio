// UIStateContext.ts
import { createContext } from 'react';

export interface UIState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDrawer: () => void;
  drawerOpen: boolean;
}

const defaultValue: UIState = {
  theme: 'light',
  toggleTheme: () => {},
  toggleDrawer: () => {},
  drawerOpen: false,
};

const UIStateContext = createContext(defaultValue);

export default UIStateContext;
