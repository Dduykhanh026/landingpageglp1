import React from 'react';

import { Squircle } from '@squircle-js/react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex justify-center items-center px-6 py-3 font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-app-primary text-white hover:bg-app-primary-dark focus:ring-app-primary shadow-lg shadow-app-primary/30",
    secondary: "bg-app-water text-white hover:opacity-90 focus:ring-app-water shadow-lg shadow-app-water/30",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-app-bgLight focus:ring-gray-200",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-app-bgLight",
  };

  if (variant === 'outline') {
    return (
      <Squircle cornerRadius={100} cornerSmoothing={1} className={`inline-flex p-[2px] bg-gray-200 hover:bg-gray-300 transition-colors ${className.replace(/rounded-\\[.*?\\]|rounded-full/g, '')}`}>
        <Squircle cornerRadius={98} cornerSmoothing={1} className="bg-white w-full h-full">
          <button className={`${baseStyle} w-full h-full bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-200`} {...props}>
            {children}
          </button>
        </Squircle>
      </Squircle>
    );
  }

  return (
    <Squircle cornerRadius={100} cornerSmoothing={1} className="inline-flex">
      <button className={`${baseStyle} ${variants[variant]} ${className.replace(/rounded-\\[.*?\\]|rounded-full/g, '')}`} {...props}>
        {children}
      </button>
    </Squircle>
  );
};

export default Button;
