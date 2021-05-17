import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';

import { toRGB } from './utilities';
import { ThemeContext } from './theme-context';
import { RGBContext } from './context';
import { ColorAdjustment } from './ColorAdjustment';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';

const Application = () => {
  const themes = React.useContext(ThemeContext);
  const { red, green, blue } = React.useContext(RGBContext);

  const rgb = {
    red,
    green,
    blue
  };

  return (
    <>
      <main style={{ borderColor: toRGB(rgb), ...themes.dark }}>
        <ColorSwatch />
        <ColorAdjustment Adjustment={ColorInput} />
        <ColorAdjustment Adjustment={ColorSlider} />
      </main>
    </>
  );
};

export default Application;
