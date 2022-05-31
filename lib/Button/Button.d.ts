/// <reference types="react" />
import './button.css';
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * Override the color with another tailwind color.
     */
    customColor?: string;
    /**
     * Disable clicking on the button.
     */
    disabled?: boolean;
    /**
     * Enable button to take the full width of the container.
     */
    fullWidth?: boolean;
    /**
     * Button contents.
     */
    label: string;
    /**
     * Size of the contents.
     */
    size?: string;
    /**
     * Optional click handler.
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, customColor, disabled, label, size, fullWidth, ...props }: ButtonProps) => JSX.Element;
export {};
