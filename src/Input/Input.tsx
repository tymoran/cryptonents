import React from 'react';
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
export const Input = ({
  placeholder="Placeholder ...",
  disabled,
  label,
  onMax,
  showMax,
  ...props
}: InputProps) => {
  // const color = customColor ?
  //     customColor :
  //     (active ? 'blue' : 'stone');

  // const tones = outline ? [500, 700] : [300, 800];
  // const text = color + '-' + tones[1];

  return (
    <div className={`flex relative inline-block text-sm ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}>
        <input type="text" className={`flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none ${showMax ? 'rounded-l-lg' : 'rounded-lg'}`} placeholder={placeholder} {...props}/>
        {showMax && <span className="cursor-pointer text-blue-600 font-medium rounded-r-md inline-flex items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm" onClick={onMax}>
            MAX
        </span>}
    </div>
  );
};
