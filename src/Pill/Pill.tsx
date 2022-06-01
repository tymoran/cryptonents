import React from 'react';
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
export const Pill = ({
  outline = false,
  customColor,
  active,
  label,
  ...props
}: PillProps) => {
  const color = customColor ?
      customColor :
      (active ? 'blue' : 'stone');

  const tones = outline ? [500, 700] : [300, 800];
  const text = color + '-' + tones[1];

  return (
    <div
      className={['inline', 'py-1', 'px-3', active && !outline ? `bg-${color}-${tones[0]}` : '', active && outline ? `outline-${color}-${tones[0]} outline` : '','text-sm', 'text-center', 'rounded-full', `text-${text}`].join(' ')}
      {...props}
    >
      {label}
    </div>
  );
};
