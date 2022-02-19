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
  align-items: center;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 5px;
  min-height: 44px;
  min-width: 44px;
  outline: 1px solid ${(props) => props.theme.colours.grey};
  overflow: hidden;
  padding: 0;
  width: calc(20% - 10px);

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    width: 80px;
  }
`;

const Swatch = styled.div<{ bgCol: Colour; active: Boolean }>`
  background-color: ${(props) => props.bgCol.value};
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  ${(props) =>
    props.active
      ? `border: 5px solid ${props.theme.colours.grey}; box-shadow: inset 0px 0px 0 2px ${props.theme.colours.white};`
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
