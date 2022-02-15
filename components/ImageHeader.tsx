import Link from 'next/link';
import styled from 'styled-components';

import { Container, Section } from './Layout';
import { Arrow } from './Arrow';

interface HeaderProps {
  action?: React.MouseEventHandler;
  actionAvailable: Boolean;
  link: string;
}

const Header = styled.header`
  ${Section}
  background-color: ${(props) => props.theme.colours.teal};
  height: 6rem;

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
    background-color: ${(props) => props.theme.colours.turquoise};
    border: none;
    color: ${(props) => props.theme.colours.plum};
    cursor: pointer;
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
  link,
}: HeaderProps): JSX.Element => {
  return (
    <Header>
      <Container>
        <Link href={link}>
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
