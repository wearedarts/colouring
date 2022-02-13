import styled from 'styled-components';
import { Colour } from '../types';

import { VisuallyHidden } from './VisuallyHidden';

interface colourButtonProps {
  colour: Colour;
  checked: boolean;
  onChange(): void;
}

const Swatch = styled.div<{ bgCol: Colour }>`
  background-color: ${(props) => props.bgCol.value};
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:focus ~ ${Swatch} {
    outline: 2px dashed ${(props) => props.theme.colours.blue};
    outline-offset: 4px;
  }

  &:checked ~ ${Swatch} {
    border: 5px solid ${(props) => props.theme.colours.grey};
    box-shadow: inset 0px 0px 0 2px ${(props) => props.theme.colours.white};
  }
`;

const Box = styled.label`
  padding: 0;
  border-radius: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  aspect-ratio: 1;
  margin: 5px;
  min-height: 44px;
  min-width: 44px;
  width: calc((100% / 6) - 10px);

  /* ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    width: 80px;
  } */
`;

export const ColourCheckbox = ({
  checked,
  colour,
  onChange,
}: colourButtonProps) => {
  return (
    <Box htmlFor={colour.name}>
      <VisuallyHidden>{colour.name}</VisuallyHidden>
      <Input
        id={colour.name}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      ></Input>
      <Swatch bgCol={colour}></Swatch>
    </Box>
  );
};
