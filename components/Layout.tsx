import styled from 'styled-components';

/**
 * Generic page layout as a flex column
 */
export const Page = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colours.pink};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

/**
 * Container element to constrain page max-width
 */
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 var(--gutter-width);
`;

/**
 * Utility styles for large page sections
 */
export const Section = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
