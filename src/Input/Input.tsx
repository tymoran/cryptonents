import React from 'react';
import './input.css';

interface InputProps {
  /**
   * Disable interactions
   */
  disabled?: boolean;
  /**
   * Input content.
   */
  value: string;
  /**
   * Placeholder displayed when there is no text.
   */
   placeholder: string;
  /**
   * Show MAX action.
   */
   showMax: boolean;
   /**
    * Optional change handler.
    */
   onChange?: () => void;
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
  value = '',
  disabled,
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
        {showMax && <span className="inline-flex items-center px-3 font-medium text-gray-500 text-blue-600 bg-white border-t border-b border-r border-gray-300 shadow-sm cursor-pointer rounded-r-md" onClick={onMax}>
            MAX
        </span>}
    </div>
  );
};
