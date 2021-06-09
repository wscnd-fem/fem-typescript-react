import * as React from 'react';
import { createContext } from './create-context';

const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: '#555',
    color: 'white'
  }
};

export const [useThemeContext, ThemeProvider] = createContext<typeof themes>();

export const ThemeContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider value={themes}>{children}</ThemeProvider>;
};
