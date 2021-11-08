import { useState } from 'react';
import styled from 'styled-components';

import Image from '../public/colouring-images/The Point.svg';
import { PaletteControl } from '../components/PaletteControl';
import { Colour } from '../types';

const Default: Colour = {
  name: 'white',
  value: '#ffffff',
};

export default function Game() {
  const [colour, setColour] = useState<Colour>(Default);

  const handleChange = (col: Colour) => {
    setColour(col);
  };

  return (
    <main>
      <Image
        onClick={(evt: Event) => {
          const target = evt.target as SVGElement;
          target ? (target.style.fill = colour.value) : null;
        }}
      ></Image>
      <PaletteControl change={handleChange} currentColour={colour} />
    </main>
  );
}
