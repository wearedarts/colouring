import styled from 'styled-components';

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

const HiddenContainer = styled.div`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

/**
 * Wraps children in a div which hides their visual display, but
 * keeps the content visible to screen readers
 */
export const VisuallyHidden = ({
  children,
}: VisuallyHiddenProps): JSX.Element => {
  return <HiddenContainer>{children}</HiddenContainer>;
};
