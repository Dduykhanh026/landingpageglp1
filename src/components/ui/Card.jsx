import React from 'react';
import { Squircle } from '@squircle-js/react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <Squircle cornerRadius={24} cornerSmoothing={1} className={`bg-white shadow-sm border border-gray-100 p-6 ${className.replace(/rounded-\\[.*?\\]/g, '')}`} {...props}>
      {children}
    </Squircle>
  );
};

export default Card;
