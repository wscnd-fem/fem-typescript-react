import { useRGBContext } from './context/ContextRGB';

export const ColorSwatch = () => {
  const { red, green, blue } = useRGBContext();

  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};
