/// <reference types="react" />
import './input.css';
interface InputProps {
    /**
     * Disable interactions
     */
    disabled?: boolean;
    /**
     * Input contents.
     */
    label: string;
    /**
     * Placeholder displayed when there is no text.
     */
    placeholder: string;
    /**
     * Show MAX action.
     */
    showMax: boolean;
    /**
     * Optional click handler.
     */
    onClick?: () => void;
    /**
     * Optional MAX click handler.
     */
    onMax?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Input: ({ placeholder, disabled, label, onMax, showMax, ...props }: InputProps) => JSX.Element;
export {};
