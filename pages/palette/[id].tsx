import { useContext } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';

import { PaletteContext } from '../../context/PaletteProvider';
import { ColourCheckbox } from '../../components/ColourCheckbox';
import { ImageHeader } from '../../components/ImageHeader';
import { Container, Page } from '../../components/Layout';
import { allColours } from '../../all-colours';
import { Colour } from '../../types';

const Main = styled.main`
  margin: 4rem 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`;

const PaletteFieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    width: 50%;
  }
`;

const Instructions = styled.legend`
  margin-bottom: 1rem;
  text-align: center;
  flex-basis: 100%;
  height: 1rem;
`;

const LayoutSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const Preview = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colours.cream};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: calc(2rem + 5px);
  padding: 1rem;

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    width: 50%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  svg {
    max-height: 24rem;
  }
`;

const PaletteDisplay = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
`;

const Swatch = styled.div<{ bgCol: Colour }>`
  background-color: ${(props) => props.bgCol.value};
  height: 2rem;
  width: 2rem;
  margin: 0 0.2rem;
  border-radius: 0.5rem;
`;

const StartLink = styled.a`
  background-color: ${(props) => props.theme.colours.blue};
  border: none;
  color: ${(props) => props.theme.colours.white};
  cursor: pointer;
  display: block;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  text-decoration: none;
`;

interface PaletteProps {
  svg: { __html: string };
  path: string;
}

export default function Game({ svg, path }: PaletteProps) {
  const { palette, updatePalette } = useContext(PaletteContext);

  return (
    <Page>
      <ImageHeader actionAvailable={false} link='/' />
      <Container>
        <Main>
          <Title>Choose your colours</Title>
          <LayoutSwitch>
            <PaletteFieldset>
              <Instructions>Select up to 7 colours</Instructions>
              {allColours
                ?.filter((element) => {
                  return (
                    element.name.includes('3') ||
                    element.name.includes('5') ||
                    element.name.includes('7')
                  );
                })
                .map((col) => {
                  return (
                    <ColourCheckbox
                      colour={col}
                      key={col.value}
                      onChange={() => updatePalette(col)}
                      checked={palette.includes(col)}
                    />
                  );
                })}
            </PaletteFieldset>
            <Preview>
              <ImageContainer dangerouslySetInnerHTML={svg} />
              <PaletteDisplay>
                {palette.map((item) => {
                  return <Swatch key={item.value} bgCol={item}></Swatch>;
                })}
              </PaletteDisplay>
              <Link href={`/game/${path}`} passHref>
                <StartLink>Start Colouring!</StartLink>
              </Link>
            </Preview>
          </LayoutSwitch>
        </Main>
      </Container>
    </Page>
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