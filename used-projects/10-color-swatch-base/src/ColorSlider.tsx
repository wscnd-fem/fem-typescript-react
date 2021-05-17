import { AdjustmentInputProps } from './ColorAdjustment';

export const ColorSlider: React.FunctionComponent<AdjustmentInputProps> = ({
  id,
  label,
  value,
  onChange
}) => {
  return (
    <div className="color-slider">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
