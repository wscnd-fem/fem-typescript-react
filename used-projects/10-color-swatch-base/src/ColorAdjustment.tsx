import React from 'react';
import { RGBContext } from './context';

export type AdjustmentInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ColorAdjustmentProps {
  Adjustment: React.FunctionComponent<AdjustmentInputProps>;
}

export const ColorAdjustment = ({ Adjustment }: ColorAdjustmentProps) => {
  const { dispatch, blue, green, red } = React.useContext(RGBContext);

  const adjustRed = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: event.target.valueAsNumber });
  };

  const adjustBlue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: event.target.valueAsNumber });
  };

  const adjustGreen = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: event.target.valueAsNumber });
  };

  return (
    <section className="color-sliders">
      <Adjustment
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <Adjustment
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <Adjustment
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
