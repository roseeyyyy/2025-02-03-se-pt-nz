import React from 'react';
import { useEmoji } from './EmojiContext';

const Emoji = () => {
  const { isHappy, toggleMood } = useEmoji();

  return (
    <div className="text-center p-6">
      <div className="text-6xl mb-4">
        Current Mood: {isHappy ? '😊' : '😢'}
      </div>
      <button
        onClick={toggleMood}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
      >
        Change Mood
      </button>
    </div>
  );
};

export default Emoji;
