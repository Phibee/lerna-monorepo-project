import type React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button text
     */
    children: string;
}
/**
 * Button component
 */
export default function Button({ children, ...props }: ButtonProps): React.ReactElement<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map