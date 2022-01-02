import { createContext, Dispatch, SetStateAction } from 'react';

interface ThemeProps {
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

export default createContext({
  theme: 'light',
  setTheme: (t) => t,
} as ThemeProps);
