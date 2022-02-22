import ReactModal from 'react-modal';
import styled from 'styled-components';

import { palettePhrases } from '../artist-phrases';

interface ArtistModalProps {
  isOpen: boolean;
  close: React.MouseEventHandler<HTMLButtonElement>;
}

const artists = [
  { name: 'Andy', src: '/artists/andy.svg' },
  { name: 'Barbara', src: '/artists/barbara.svg' },
  { name: 'Frida', src: '/artists/frida.svg' },
  { name: 'Georgia', src: '/artists/georgia.svg' },
  { name: 'Vincent', src: '/artists/vincent.svg' },
  { name: 'Yinka', src: '/artists/yinka.svg' },
];
const modalStyles = {
  content: {
    alignItems: 'flex-end',
    background: 'transparent',
    border: '0',
    display: 'flex',
    height: 'calc(100% - 6rem)',
    inset: 'auto 50% 0 0%',
    justifyContent: 'center',
    margin: 'auto',
    padding: '0',
    width: '100%',
  },
  overlay: {
    top: '6rem',
  },
};

// Flips from a column to a row as screen size grows
const ModalLayout = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column-reverse;
  height: 80%;
  justify-content: flex-start;
  padding: 0 1rem;

  img {
    align-self: flex-start;
    height: 50%;
  }

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    align-items: flex-end;
    flex-direction: row;
    height: 25%;
    justify-content: center;

    img {
      height: 100%;
      align-self: flex-end;
    }
  }
`;

const SpeechBubble = styled.div`
  align-self: flex-end;
  background: ${(props) => props.theme.colours.cream};
  border-radius: 30px;
  font-size: 1rem;
  max-width: 600px;
  min-height: 100px;
  min-width: 320px;
  padding: 1.5rem;
  position: relative;
  width: 50%;

  &:before {
    border-bottom: 20px solid transparent;
    border-left: 20px solid ${(props) => props.theme.colours.cream};
    border-right: 20px solid transparent;
    border-top: 20px solid ${(props) => props.theme.colours.cream};
    bottom: -30px;
    content: '';
    left: 35px;
    position: absolute;
  }

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    align-self: flex-start;

    &:before {
      border-bottom: 20px solid ${(props) => props.theme.colours.cream};
      border-left: 20px solid transparent;
      border-right: 20px solid ${(props) => props.theme.colours.cream};
      border-top: 20px solid transparent;
      content: '';
      height: 0;
      left: -35px;
      position: absolute;
      top: calc(100% - 60px);
    }
  }

  button {
    background-color: ${(props) => props.theme.colours.teal};
    border: none;
    bottom: -1.5rem;
    color: ${(props) => props.theme.colours.white};
    font-weight: bold;
    left: 50%;
    margin-top: 1rem;
    padding: 0.3rem 0.6rem;
    position: absolute;
    transform: translateX(-50%);
    width: 5rem;
  }
`;

const Text = styled.div`
  overflow-y: auto;
  max-height: 100%;
`;

/**
 * Display a dismissible hint from an artist friend
 */
export const ArtistModal = ({
  isOpen,
  close,
}: ArtistModalProps): JSX.Element => {
  const randomArtist = artists[Math.floor(Math.random() * artists.length)];
  const randomPhrase =
    palettePhrases[Math.floor(Math.random() * palettePhrases.length)];

  ReactModal.setAppElement('#__next');

  return (
    <ReactModal isOpen={isOpen} style={modalStyles} contentLabel={'Your Art'}>
      <ModalLayout>
        <img src={randomArtist.src} alt={`{randomArtist.name}'s artist tip.`} />
        <SpeechBubble>
          <Text>{randomPhrase}</Text>
          <button onClick={(e) => close(e)}>OK!</button>
        </SpeechBubble>
      </ModalLayout>
    </ReactModal>
  );
};
