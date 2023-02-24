import React, { useState, useRef, useEffect } from 'react';

export const SoundButton = () => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    audio.current.play();
    setPlaying(true);
  }, []);

  const handleClick = () => {
    setPlaying(!playing);
    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  };

  return (
    <audio
      ref={audio}
      src="/wedding-music.mp3"
      controls
      onEnded={() => setPlaying(false)}
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        padding: '1rem',
        background: '#fff',
        boxShadow: '0 0 0.25rem rgba(0, 0, 0, 0.1)',
        borderRadius: '0.25rem'
      }}
    >
      <button
        onClick={handleClick}
        className={`${
          playing ? 'bg-green-500' : 'bg-red-500'
        } text-white py-2 px-4 rounded-full`}
      >
        {playing ? 'Pause' : 'Play'}
      </button>
    </audio>
  );
};

export default SoundButton;
