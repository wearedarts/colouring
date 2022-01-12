import Link from 'next/link';
import styled from 'styled-components';

import { Container, Section } from './Layout';
import { Arrow } from './Arrow';

interface HeaderProps {
  action: React.MouseEventHandler;
  actionAvailable: Boolean;
}

const Header = styled.header`
  ${Section}
  background-color: ${(props) => props.theme.colours.teal};
  border-top: 1rem solid ${(props) => props.theme.colours.turquoise};
  height: 5rem;

  ${Container} {
    display: flex;
    justify-content: space-between;
  }

  a {
    align-items: center;
    color: ${(props) => props.theme.colours.white};
    display: flex;
    font-size: 1.1rem;
    text-decoration: none;
    vertical-align: middle;

    &:focus {
      outline: 3px solid ${(props) => props.theme.colours.orange};
      outline-offset: 3px;
    }

    svg {
      height: 1.5rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.colours.blue};
    border: none;
    color: ${(props) => props.theme.colours.white};
    font-weight: bold;
    padding: 0.3rem 0.6rem;
  }
`;

/**
 * Header for colouring pages, provides link to picture choice
 * and control to finish picture
 */
export const ImageHeader = ({
  action,
  actionAvailable,
}: HeaderProps): JSX.Element => {
  return (
    <Header>
      <Container>
        <Link href='/'>
          <a>
            <Arrow />
            back
          </a>
        </Link>
        {actionAvailable ? (
          <button onClick={action}>Finish Picture</button>
        ) : null}
      </Container>
    </Header>
  );
};
