import ReactModal from 'react-modal';
import styled from 'styled-components';

interface SaveModalProps {
  isOpen: boolean;
  name: string;
  nameHandler: React.ChangeEventHandler<HTMLInputElement>;
  title: string;
  close: React.MouseEventHandler<HTMLButtonElement>;
  titleHandler: React.ChangeEventHandler<HTMLInputElement>;
  frame: Function;
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

const LabelInput = styled.div`
  margin: 1rem auto;
  width: 15rem;

  label {
    display: block;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  button {
    background-color: ${(props) => props.theme.colours.blue};
    border: none;
    color: ${(props) => props.theme.colours.white};
    font-weight: bold;
    margin-top: 1rem;
    padding: 0.3rem 0.6rem;
  }

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    flex-direction: row;
    width: 400px;
  }
`;

/**
 * Interrupt the user to ask for their name, image title and confirm
 * that they're ready to finish
 */
export const SaveModal = ({
  close,
  frame,
  isOpen,
  name,
  nameHandler,
  title,
  titleHandler,
}: SaveModalProps): JSX.Element => {
  ReactModal.setAppElement('#__next');

  return (
    <ReactModal isOpen={isOpen} style={modalStyles} contentLabel={'Your Art'}>
      <Title>Your Art</Title>
      <form>
        <LabelInput>
          <label htmlFor='name'>Your name</label>
          <input
            id='name'
            value={name}
            onChange={nameHandler}
            type='text'
            maxLength={20}
          />
        </LabelInput>
        <LabelInput>
          <label htmlFor='title'>Give it a title</label>
          <input
            id='title'
            value={title}
            onChange={titleHandler}
            type='text'
            maxLength={30}
          />
        </LabelInput>
        <Controls>
          <button onClick={close}>Wait, back to colouring...</button>
          <button
            onClick={(e) => {
              frame();
              close(e);
            }}
          >
            Finish!
          </button>
        </Controls>
      </form>
    </ReactModal>
  );
};
