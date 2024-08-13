// src/components/Container.tsx
import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {children}
    </div>
  );
};

export default Container;
