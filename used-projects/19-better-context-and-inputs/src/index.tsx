import { render } from 'react-dom';

import Application from './Application';

import { ThemeContextProvider } from './context/ContextTheme';
import { RGBContextProvider } from './context/ContextRGB';

import './style.scss';

const rootElement = document.getElementById('root');
render(
  <ThemeContextProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeContextProvider>,
  rootElement
);
