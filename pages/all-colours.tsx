import { NextPage } from 'next';
import styled from 'styled-components';

import { Container, Page, Section } from '../components/Layout';
import { Colour } from '../types';
import { allColours } from '../all-colours';

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
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Box = styled.div`
  width: calc((100% / 5) - 1rem);
  margin: 0.5rem;

  ${(props) => props.theme.screenSizes.tabletPortraitPlus} {
    width: calc((100% / 10) - 1rem);
  }
`;

const Swatch = styled.div<{ bgCol: Colour }>`
  background-color: ${(props) => props.bgCol.value};
  height: 4rem;
  width: 100%;
  border-radius: 0.5rem;
`;

export const Index: NextPage = () => {
  return (
    <Page>
      <Main>
        <Container>
          <h1>All Colours</h1>
          <Content>
            {allColours.map((colour: Colour) => {
              return (
                <Box key={colour.name}>
                  <Swatch bgCol={colour}></Swatch>
                  <div>{colour.name}</div>
                </Box>
              );
            })}
          </Content>
        </Container>
      </Main>
    </Page>
  );
};

export default Index;
