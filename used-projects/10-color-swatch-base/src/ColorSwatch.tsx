import * as React from 'react';

import { RGBContext } from './context';

export const ColorSwatch = () => {

  const { blue, green, red } = React.useContext(RGBContext);
  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};
