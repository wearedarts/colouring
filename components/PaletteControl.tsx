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
    name: 'red',
    value: '#EF4444',
  },
  {
    name: 'blue',
    value: '#3B82F6',
  },
  {
    name: 'yellow',
    value: '#FBBF24',
  },
  {
    name: 'green',
    value: '#10B981',
  },
  {
    name: 'orange',
    value: '#FF922B',
  },
  {
    name: 'purple',
    value: '#8B5CF6',
  },
  {
    name: 'grey',
    value: '#343a40',
  },
  {
    name: 'white',
    value: '#ffffff',
  },
];

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Spacer = styled.div`
  height: 220px;
`;

const PaletteContainer = styled.div`
  background-color: ${(props) => props.theme.colours.white};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 2px solid ${(props) => props.theme.colours.grey};
  border-bottom: 0;
  bottom: 0;
  padding: 0.5rem;
  position: fixed;
  margin: auto;
`;

export const PaletteControl = ({
  palette,
  currentColour,
  change,
}: paletteControlProps) => {
  const currentPalette = palette || defaultPalette;

  return (
    <>
      <Spacer />
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
    </>
  );
};
