import Link from 'next/link';
import { ImageData } from '../types';
import styled from 'styled-components';

const FlexLink = styled.a`
  background-color: ${(props) => props.theme.colours.cream};
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  height: 100%;
  justify-content: space-between;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:focus {
    outline: 3px solid ${(props) => props.theme.colours.orange};
    outline-offset: 3px;
  }

  img {
    aspect-ratio: 1;
    flex-grow: 1;
  }

  div {
    color: ${(props) => props.theme.colours.cream};
    background-color: ${(props) => props.theme.colours.teal};
    position: absolute;
    padding: 4px 8px;
    bottom: -4rem;
    transform: translateX(-50%);
    left: 50%;
    width: 90%;
  }
`;

export const ImageLink = ({ name, page, src }: ImageData) => {
  return (
    <Link href={`${page}`} passHref>
      <FlexLink>
        <img src={src} alt='' />
        <div>{name}</div>
      </FlexLink>
    </Link>
  );
};
