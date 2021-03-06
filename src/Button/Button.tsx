import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this a regular button or a call to action?
   */
   secondary?: boolean;
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
export const Button = ({
  secondary = false,
  customColor,
  disabled,
  label,
  size = 'base',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const color = customColor ?
      customColor :
      (secondary ? 'stone' : 'blue');

  const tones = secondary ? [300, 400, 300, 200] : [600, 700, 500, 200];
  const text = secondary ?  'black': 'white';

  return (
    <div className={fullWidth ? "block" : "inline-block"}><button
      type="button"
      disabled={disabled}
      className={[disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer', 'py-2', 'px-4', `bg-${color}-${tones[0]}`, `hover:bg-${color}-${tones[1]}`, `focus:ring-${color}-${tones[2]}`, `focus:ring-offset-${color}-${tones[3]}`, `text-${text}`, 'w-full', 'transition', 'ease-in', 'duration-200', 'text-center', `text-${size}`, 'font-medium', 'shadow-md', 'focus:outline-none', 'focus:ring-offset-2', ' rounded-lg'].join(' ')}
      {...props}
    >
      {label}
    </button>
    </div>
  );
};
