import styled from 'styled-components';
import { Colour } from '../types';

import { VisuallyHidden } from './VisuallyHidden';

interface colourButtonProps {
  colour: Colour;
  clicker: Function;
  currentColour: Colour;
  showLabel?: Boolean;
}

const Button = styled.button`
  padding: 0;
  border: 1px solid ${(props) => props.theme.colours.grey_dark};
  border-radius: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colours.cream};
  overflow: auto;
  aspect-ratio: 1;
  flex-basis: 25%;
  margin-bottom: 2px;
`;

const Swatch = styled.div<{ bgCol: Colour; active: Boolean }>`
  background-color: ${(props) => props.bgCol.value};
  height: 100%;
  width: 100%;
  border-radius: 0.8rem;
  ${(props) =>
    props.active
      ? `border: 3px solid ${props.theme.colours.grey_dark}`
      : `border: 3px solid transparent`}
`;

export const ColourButton = ({
  clicker,
  colour,
  currentColour,
  showLabel,
}: colourButtonProps) => {
  return (
    <Button onClick={() => clicker(colour)}>
      <VisuallyHidden>{<div>{colour.name}</div>}</VisuallyHidden>
      <Swatch active={currentColour === colour} bgCol={colour}></Swatch>
    </Button>
  );
};
