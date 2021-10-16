import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Container, Page, Section } from '../components/Layout';

const Header = styled.header`
  ${Section}
  background-color: ${(props) => props.theme.colours.orange};
  flex-basis: 8rem;

  img {
    display: block;
    height: 4rem;
  }
`;

const Main = styled.main`
  ${Section}
  flex-grow: 1;

  h1 {
    font-size: 1.5rem;
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
  margin: 1rem;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    align-self: flex-end;
    background-color: ${(props) => props.theme.colours.blue};
    color: ${(props) => props.theme.colours.cream};
    display: flex;
    font-weight: 500;
    height: 3rem;
    justify-content: center;
    margin-bottom: 2rem;
    text-decoration: none;
    width: 5rem;

    &:focus {
      outline: 3px solid ${(props) => props.theme.colours.orange};
      outline-offset: 3px;
    }
  }
`;

const Footer = styled.footer`
  ${Section}
  background-color: ${(props) => props.theme.colours.purple};
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
        <title>darts - colouring</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header>
        <Container>
          <img alt='darts' src='/darts-logo-cream.svg' />
        </Container>
      </Header>

      <Main>
        <Container>
          <Content>
            <h1>colouring game name</h1>
            <GameArea>
              <Link href='/game' passHref>
                Play
              </Link>
            </GameArea>
          </Content>
          <div>
            <h2>how to play</h2>
            <p>How to play information.</p>
            <p>More how to play information.</p>
          </div>
        </Container>
      </Main>

      <Footer>
        <a href='https://wearedarts.org.uk/'>wearedarts.org.uk</a>
      </Footer>
    </Page>
  );
}
