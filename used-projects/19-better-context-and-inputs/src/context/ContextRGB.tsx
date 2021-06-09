import * as React from 'react';
import { createContext } from './create-context';
import { reducer, AdjustmentAction } from '../reducer';
import { RGBColorType } from '../types';

interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0
};

export const [useRGBContext, RGBProvider] =
  createContext<typeof initialState & RGBContextType>();

export const RGBContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <RGBProvider
      value={{
        ...rgb,
        dispatch
      }}
    >
      {children}
    </RGBProvider>
  );
};
