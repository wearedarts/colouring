import styled from 'styled-components';

import { ColourButton } from './ColourButton';
import { Colour, Palette } from '../types';

interface paletteControlProps {
  change: Function;
  currentColour: Colour;
  palette?: Palette;
}

const defaultPalette: Palette = [
  {
    name: 'grey',
    value: '#6B7280',
  },
  {
    name: 'red',
    value: '#EF4444',
  },
  {
    name: 'orange',
    value: '#F59E0B',
  },
  {
    name: 'green',
    value: '#10B981',
  },
  {
    name: 'blue',
    value: '#3B82F6',
  },
  {
    name: 'purple',
    value: '#8B5CF6',
  },
  {
    name: 'pink',
    value: '#EC4899',
  },
  {
    name: 'white',
    value: '#ffffff',
  },
];

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
`;

const PaletteContainer = styled.div`
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  bottom: 0;
  max-width: 100%;
  padding: 1rem;
  position: fixed;
  width: 400px;
`;

export const PaletteControl = ({
  palette,
  currentColour,
  change,
}: paletteControlProps) => {
  const currentPalette = palette || defaultPalette;

  return (
    <PaletteContainer>
      <ButtonRow>
        {currentPalette?.map((col) => {
          return (
            <ColourButton
              clicker={change}
              colour={col}
              currentColour={currentColour}
              key={col.value}
            />
          );
        })}
      </ButtonRow>
    </PaletteContainer>
  );
};
