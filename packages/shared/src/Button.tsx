import type React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReactLogo } from './assets/logo.svg';

const StyledButton = styled.button`
  text-transform: uppercase;
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button text
   */
  children: string;
}

/**
 * Button component
 */
export default function Button({
  children,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <StyledButton type="button" {...props}>
      <ReactLogo width={23} height={23} />
      {children}
    </StyledButton>
  );
}
