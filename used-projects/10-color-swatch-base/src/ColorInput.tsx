import { AdjustmentInputProps } from './ColorAdjustment';

export const ColorInput: React.FunctionComponent<AdjustmentInputProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
