import * as React from 'react';
import { AdjustmentAction, reducer } from './reducer';
import { RGBColorType } from './types';

const initialState: RGBColorType = {
  blue: 0,
  green: 0,
  red: 0
};

interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

export const RGBContext = React.createContext<RGBContextType>({
  ...initialState,
  dispatch: () => {}
});

type RGBContextProviderProps = {
  children: React.ReactNode;
};

export const RGBContextProvider = ({ children }: RGBContextProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <RGBContext.Provider value={{ dispatch, ...state }}>
      {children}
    </RGBContext.Provider>
  );
};
