import * as React from 'react';

// type Themes = Record<'light' | 'dark', React.CSSProperties>;

type ThemeColors = 'light' | 'dark';
type Themes = {
  [key in ThemeColors]: React.CSSProperties;
};

const defaultTheme: Themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: '#555',
    color: 'white'
  }
};

export const ThemeContext = React.createContext(defaultTheme);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
