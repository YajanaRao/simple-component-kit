// import theme from './theme';
import * as React from 'react';
import { DefaultTheme } from './theme';

const ThemeContext = React.createContext(DefaultTheme);

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return themeContext;
};


interface ThemeProviderProps {
  children?: any;
  value?: string
}

const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
