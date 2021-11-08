import Head from 'next/head';
import styled from 'styled-components';
import { NextPage, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

import { Container, Page, Section } from '../components/Layout';
import { ImageLink } from '../components/ImageLink';

import { ImageData } from '../types';

const Header = styled.header`
  ${Section}
  background-color: ${(props) => props.theme.colours.teal};
  flex-basis: 8rem;
  border-top: 1rem solid ${(props) => props.theme.colours.turquoise};

  img {
    display: block;
    height: 5rem;
  }
`;

const Main = styled.main`
  ${Section}
  flex-grow: 1;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ImageList = styled.ul`
  align-items: center;
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100%;

  li {
    margin: 1rem 0;
    width: 100%;

    ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
      width: calc(100% / 2);
    }

    ${(props) => props.theme.screenSizes.tabletLandscapePlus} {
      width: calc(100% / 3);
    }
  }
`;

const HowToPlay = styled.div`
  background-color: ${(props) => props.theme.colours.cream};
  margin: 1rem auto;
  max-width: 600px;
  padding-bottom: 1rem;

  h2 {
    background-color: ${(props) => props.theme.colours.teal};
    color: ${(props) => props.theme.colours.cream};
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  p {
    margin: auto 1rem;
  }
`;

const Footer = styled.footer`
  ${Section}
  background-color: ${(props) => props.theme.colours.teal};
  height: 4rem;

  a {
    color: ${(props) => props.theme.colours.cream};
    display: block;
    font-weight: 500;
    text-decoration: none;

    &:focus {
      outline: 3px solid ${(props) => props.theme.colours.orange};
      outline-offset: 3px;
    }
  }
`;

interface IndexPageProps {
  images: Array<ImageData>;
}

export const Index: NextPage<IndexPageProps> = ({ images }) => {
  return (
    <Page>
      <Head>
        <title>colouring</title>
      </Head>

      <Header>
        <Container>
          <img alt='the point.' src='/the-point-logo-cream.svg' />
        </Container>
      </Header>

      <Main>
        <Container>
          <Content>
            <h1>colouring</h1>
            <h2>Choose a picture to colour:</h2>
            <ImageList>
              {images.map((image: ImageData) => {
                return (
                  <li key={image.name}>
                    <ImageLink
                      name={image.name}
                      page={image.page}
                      src={image.src}
                    />
                  </li>
                );
              })}
            </ImageList>
          </Content>
          <HowToPlay>
            <h2>How to play</h2>
            <p>
              Click on a colour, then click on a shape in the picture to colour
              it in.
            </p>
            <p>
              You can change your colour each time to make the pictures as
              colourful as you like.
            </p>
          </HowToPlay>
        </Container>
      </Main>

      <Footer>
        <a href='https://thepoint.org.uk/'>thepoint.org.uk</a>
      </Footer>
    </Page>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  // Find where our colouring images are at build time
  const imageLocation = path.join(process.cwd(), './public/colouring-images');

  // Extract the filenames and check they are SVGs
  const svgFiles: Array<string> = fs
    .readdirSync(imageLocation)
    .filter((file: string) => file.endsWith('.svg'));

  const imageList = svgFiles.map((file: string) => {
    const name = file.replace(/\.svg$/, '');
    const path = name.toLocaleLowerCase().replace(/\s/, '-');
    const publicURL = 'colouring-images/' + file;

    return {
      name: name,
      page: path,
      src: publicURL,
    };
  });

  return {
    props: {
      images: imageList,
    },
  };
};
