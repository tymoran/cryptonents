/// <reference types="react" />
import './pill.css';
interface PillProps {
    /**
     * Display an outline an a transparent background.
     */
    outline?: boolean;
    /**
     * Override the color with another tailwind color.
     */
    customColor?: string;
    /**
     * Is the pill active? (displays the main color or a grayish color)
     */
    active?: boolean;
    /**
     * Pill contents.
     */
    label: string;
    /**
     * Optional click handler.
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Pill: ({ outline, customColor, active, label, ...props }: PillProps) => JSX.Element;
export {};
