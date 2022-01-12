import { useState } from 'react';
import styled from 'styled-components';

import Image from '../public/colouring-images/Doncaster Minster.svg';
import { ImageHeader } from '../components/ImageHeader';
import { PaletteControl } from '../components/PaletteControl';
import { Colour } from '../types';
import { SaveModal } from '../components/SaveModal';
import { VisuallyHidden } from '../components/VisuallyHidden';

const FrameStyles = `
  border: 3px solid;
  width: 95%;
  max-width: 70vh;
  margin: auto;
  border-width: min(10vh, 12vw);
  border-image-source: url(frame.svg);
  border-image-slice: 12%;
  `;

const Frame = styled.div<{ framed: boolean }>`
  ${(props) => props.framed && FrameStyles};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 2rem 0;
  text-align: center;
`;

const Signature = styled.div`
  font-family: cursive;
  font-size: 1.5rem;
  margin: 2rem 0;
  text-align: center;
`;

const Default: Colour = {
  name: 'white',
  value: '#ffffff',
};

export default function Game() {
  const [colour, setColour] = useState<Colour>(Default);
  const [framed, setFramed] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleColor = (col: Colour) => {
    setColour(col);
  };

  const handleFramed = () => {
    setFramed(!framed);
  };

  const handleName = (event: { target: HTMLInputElement }) => {
    setName(event.target.value);
  };

  const handleTitle = (event: { target: HTMLInputElement }) => {
    setTitle(event.target.value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <VisuallyHidden>
        <h1>Colouring Image</h1>
      </VisuallyHidden>
      <ImageHeader action={openModal} actionAvailable={!framed} />

      <main>
        {framed && title ? <Title>{title}</Title> : null}
        <Frame framed={framed}>
          <Image
            onClick={(evt: Event) => {
              if (framed) return;
              const target = evt.target as SVGElement;
              target ? (target.style.fill = colour.value) : null;
            }}
            alt=''
          />
        </Frame>
        {framed && name ? <Signature>by {name}</Signature> : null}

        {!framed ? (
          <PaletteControl change={handleColor} currentColour={colour} />
        ) : null}
      </main>

      <SaveModal
        close={closeModal}
        frame={handleFramed}
        isOpen={modalIsOpen}
        name={name}
        nameHandler={handleName}
        title={title}
        titleHandler={handleTitle}
      />
    </>
  );
}
