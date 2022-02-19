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
    name: 'RED 7',
    value: '#f03e3e',
  },
  {
    name: 'BLUE 7',
    value: '#1c7ed6',
  },
  {
    name: 'YELLOW 7',
    value: '#f59f00',
  },
  {
    name: 'GREEN 7',
    value: '#37b24d',
  },
  {
    name: 'ORANGE 7',
    value: '#f76707',
  },
  {
    name: 'VIOLET 7',
    value: '#7048e8',
  },
  {
    name: 'GRAY 7',
    value: '#495057',
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
  // if we have a palette, spread white into it, otherwise give the default
  const currentPalette = palette?.length
    ? [
        ...palette,
        ...[
          {
            name: 'white',
            value: '#ffffff',
          },
        ],
      ]
    : defaultPalette;

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
