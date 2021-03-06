import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';

import { ImageLink } from '../components/ImageLink';
import { Container, Page, Section } from '../components/Layout';
import { ImageData } from '../types';

const Header = styled.header`
  ${Section}
  background-color: ${(props) => props.theme.colours.teal};
  flex-basis: 10rem;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: ${(props) => props.theme.colours.cream};
    flex: 0;
    font-size: 1.5rem;
    text-decoration: none;
    vertical-align: middle;

    ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
      font-size: 2rem;
    }

    &:focus {
      outline: 3px solid ${(props) => props.theme.colours.orange};
      outline-offset: 3px;
    }
  }

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
    border: 3px solid;
    border-width: min(6vh, 12vw);
    border-image-source: url(frame.svg);
    border-image-slice: 12%;
    margin: 2rem 1rem;
    width: calc(100% - 2rem);

    ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
      width: calc(100% / 2);
    }

    ${(props) => props.theme.screenSizes.tabletLandscapePlus} {
      width: calc((100% / 3) - 2rem);
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
  background-color: ${(props) => props.theme.colours.plum};
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
          <Link href='/' passHref>
            <img alt='the point.' src='/the-point-logo-cream.svg' />
          </Link>
          <a href='https://darts-games.netlify.app/'>More Games</a>
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
                      page={`/palette/${image.page}`}
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
    // TODO, make URLs nice again, update page property
    const publicURL = 'colouring-images/' + file;

    return {
      name: name,
      page: name,
      src: publicURL,
    };
  });

  return {
    props: {
      images: imageList,
    },
  };
};
