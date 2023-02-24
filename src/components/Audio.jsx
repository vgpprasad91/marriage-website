import React from 'react'

const WeddingAudio = () => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Wedding Audio</h3>
      <audio controls>
        <source src="/wedding-audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default WeddingAudio
