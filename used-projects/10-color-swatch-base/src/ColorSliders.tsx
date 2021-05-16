import { ColorSlider } from './ColorSlider';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

export const ColorSliders = ({
  red,
  green,
  blue,
  dispatch
}: RGBColorType & { dispatch: React.Dispatch<AdjustmentAction> }) => {
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
      <ColorSlider
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <ColorSlider
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <ColorSlider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
