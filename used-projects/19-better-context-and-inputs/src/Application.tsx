import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorAdjustment } from './ColorAdjustment';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';
import { useThemeContext } from './context/ContextTheme';

const Application = () => {
  const themes = useThemeContext();

  return (
    <main
      style={{
        ...themes.dark
      }}
    >
      <ColorSwatch />
      <ColorAdjustment Adjustment={ColorInput} />
      <ColorAdjustment Adjustment={ColorSlider} />
    </main>
  );
};

export default Application;
