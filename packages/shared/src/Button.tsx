import type React from "react";
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "./assets/logo.svg";

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
            <StyledButton
                  type="button"
                  {...props}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                  {/* <ReactLogo width={23} height={23} /> */}
                  {children}
            </StyledButton>
      );
}
