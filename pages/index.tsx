import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Container, Page, Section } from '../components/Layout';

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GameArea = styled.div`
  aspect-ratio: calc(4 / 3);
  background-color: ${(props) => props.theme.colours.cream};
  background-image: url(/preview.png);
  margin: 1rem;
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    align-self: flex-end;
    background-color: ${(props) => props.theme.colours.teal};
    color: ${(props) => props.theme.colours.cream};
    display: flex;
    font-weight: 500;
    justify-content: center;
    margin-bottom: 2rem;
    text-decoration: none;
    font-size: 2rem;
    padding: 1rem 2rem;

    &:focus {
      outline: 3px solid ${(props) => props.theme.colours.orange};
      outline-offset: 3px;
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

export default function Index() {
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
            <GameArea>
              <Link href='/game' passHref>
                Play
              </Link>
            </GameArea>
          </Content>
          <HowToPlay>
            <h2>how to play</h2>
            <p>How to play information.</p>
            <p>More how to play information.</p>
          </HowToPlay>
        </Container>
      </Main>

      <Footer>
        <a href='https://thepoint.org.uk/'>thepoint.org.uk</a>
      </Footer>
    </Page>
  );
}
