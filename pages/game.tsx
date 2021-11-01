import { useState } from 'react';

import { ColouringImage } from '../components/ColouringImage';
import { PaletteControl } from '../components/PaletteControl';
import { Colour } from '../types';

const Transparent: Colour = {
  name: 'transparent',
  value: 'transparent',
};

export default function Game() {
  const [colour, setColour] = useState<Colour>(Transparent);

  const handleChange = (col: Colour) => {
    setColour(col);
  };

  return (
    <main>
      <ColouringImage currentColour={colour} />
      <PaletteControl change={handleChange} currentColour={colour} />
    </main>
  );
}
