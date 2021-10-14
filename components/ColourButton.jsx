import styled from 'styled-components';

const Button = styled.button`
  ${(props) =>
    props.active
      ? `border: 2px solid black;
  border-radius: 0.5rem;`
      : `border: 1px solid grey;
  border-radius: 0.5rem;`}

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 6rem;
  justify-content: space-around;
  width: 5rem;
  margin: 0.5rem;
  background-color: white;
`;

const Circle = styled.div`
  background-color: ${(props) => props.bgCol};
  height: 4rem;
  width: 4rem;
  border-radius: 4rem;
`;

export const ColourButton = (props) => {
  const { clicker, label, colour, currentColour } = props;

  return (
    <Button onClick={() => clicker(colour)} active={currentColour === colour}>
      <Circle bgCol={colour}></Circle>
      <div>{label}</div>
    </Button>
  );
};
