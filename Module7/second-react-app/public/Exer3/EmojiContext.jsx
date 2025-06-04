import React, { createContext, useContext, useState } from 'react';

// Create context
const EmojiContext = createContext();

// Custom hook for easy context access
export const useEmoji = () => useContext(EmojiContext);

// Provider component
export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(prev => !prev);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export default EmojiContext;