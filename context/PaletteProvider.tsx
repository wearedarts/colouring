import { createContext, FC, useState } from 'react';

import { Colour } from '../types';

interface PaletteContextValue {
  palette: Array<Colour>;
  updatePalette: (input: Colour) => void;
}

const defaultValueShape = {
  palette: [] as Array<Colour>,
  updatePalette: () => undefined,
};

export const PaletteContext =
  createContext<PaletteContextValue>(defaultValueShape);

export const PaletteProvider: FC = ({ children }) => {
  const [palette, setPalette] = useState<Array<Colour>>([]);

  function updatePalette(input: Colour) {
    const currentItems = palette;

    // We already have this colour, so we are removing it
    if (currentItems.includes(input)) {
      setPalette(currentItems.filter((item) => item !== input));
    }
    // We're adding
    else {
      if (currentItems.length < 7) {
        currentItems.push(input);
        setPalette([...currentItems]);
      }
    }
  }

  return (
    <PaletteContext.Provider
      value={{
        palette,
        updatePalette,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};
