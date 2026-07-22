import React from 'react';
import { Squircle } from '@squircle-js/react';
const MockupPhone = ({
  children,
  className = ''
}) => {
  return <Squircle cornerRadius={40} cornerSmoothing={1} className={`relative mx-auto border-app-darkCard dark:border-app-darkCard bg-app-darkCard border-[8px] w-[260px] h-[520px] md:w-[300px] md:h-[600px] shadow-xl overflow-hidden shrink-0 ${className}`}>
      {/* Notch */}
      <Squircle cornerRadius={16} cornerSmoothing={1} className="w-[128px] h-[16px] md:w-[148px] md:h-[18px] bg-app-darkCard top-0 left-1/2 -translate-x-1/2 absolute z-20"></Squircle>
      
      {/* Screen Content */}
      <Squircle cornerRadius={32} cornerSmoothing={1} className="bg-white dark:bg-gray-100 h-[100%] w-[100%] overflow-hidden relative">
        {children || <Squircle className="flex flex-col items-center justify-center h-full bg-gray-50 text-gray-400 p-6 text-center border-dashed border-2 border-gray-200 m-4" cornerRadius={20} cornerSmoothing={1}>
             <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
             <p className="font-medium text-subhead">App UI Mockup Placeholder</p>
          </Squircle>}
      </Squircle>
    </Squircle>;
};
export default MockupPhone;