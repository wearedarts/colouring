import { useContext, useState } from 'react';
import styled from 'styled-components';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';

import { ImageHeader } from '../../components/ImageHeader';
import { PaletteControl } from '../../components/PaletteControl';
import { Colour } from '../../types';
import { SaveModal } from '../../components/SaveModal';
import { VisuallyHidden } from '../../components/VisuallyHidden';
import { PaletteContext } from '../../context/PaletteProvider';

const FrameStyles = `
  border: 3px solid;
  width: 95%;
  max-width: 70vh;
  margin: auto;
  border-width: min(10vh, 12vw);
  border-image-source: url(../frame.svg);
  border-image-slice: 12%;
  `;

const Frame = styled.div<{ framed: boolean }>`
  ${(props) => props.framed && FrameStyles};
`;

const ImageContainer = styled.div`
  svg {
    max-height: 120vh;
    width: 100%;
  }
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

interface GameProps {
  svg: { __html: string };
  path: string;
}

export default function Game({ svg, path }: GameProps) {
  const [colour, setColour] = useState<Colour>(Default);
  const [framed, setFramed] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const { palette } = useContext(PaletteContext);

  const handleColour = (col: Colour) => {
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
      <Head>
        <title>colouring</title>
      </Head>

      <VisuallyHidden>
        <h1>Colouring Image</h1>
      </VisuallyHidden>
      <ImageHeader
        action={openModal}
        actionAvailable={!framed}
        link={`/palette/${path}`}
      />
      <main>
        {framed && title ? <Title>{title}</Title> : null}

        <Frame framed={framed}>
          <ImageContainer
            dangerouslySetInnerHTML={svg}
            onClick={(evt: React.MouseEvent<Element, MouseEvent>) => {
              if (framed) return;
              const target = evt.target as SVGElement;
              target ? (target.style.fill = colour.value) : null;
            }}
          />
        </Frame>
        {framed && name ? <Signature>by {name}</Signature> : null}

        {!framed ? (
          <PaletteControl
            palette={palette}
            change={handleColour}
            currentColour={colour}
          />
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Find our images files
  const fileNames = fs.readdirSync(
    path.join(process.cwd(), './public/colouring-images')
  );

  // Make a path for each
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.svg$/, ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const fullPath = path.join(
    process.cwd(),
    `./public/colouring-images/${params.id}.svg`
  );

  const imageFile = fs.readFileSync(fullPath, 'utf8');

  return {
    props: {
      svg: { __html: imageFile },
      path: params.id,
    },
  };
};
