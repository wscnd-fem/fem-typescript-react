import { RGBColorType } from './types';

export type AdjustmentAction = {
  type: 'ADJUST_RED' | 'ADJUST_GREEN' | 'ADJUST_BLUE';
  payload: number;
};

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  if (action.type === 'ADJUST_RED') {
    console.log('red', action.payload);
    return { ...state, red: action.payload };
  }

  if (action.type === 'ADJUST_GREEN') {
    console.log('green');
    return { ...state, green: action.payload };
  }

  if (action.type === 'ADJUST_BLUE') {
    console.log('blue');
    return { ...state, blue: action.payload };
  }

  return state;
};
