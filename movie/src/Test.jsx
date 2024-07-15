import React, { useEffect } from 'react';
import Clappr from 'clappr';

const Test = () => {
  useEffect(() => {

    const options = {
      sources: ['https://streamtape.com/v/QdqBj0BJP3s03Rv/Kingdom.Of.The.Planet.Of.The.Apes.2024.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.mp4'], // Replace with your actual video URL
      width: '100%',
      height: '400px', // Adjust the height as needed
      parentId: 'player-container',
    };

    const player = new Clappr.Player(options);

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Clappr Player Test</h2>
      <div id="player-container" style={{width: '100%', height: 'auto', marginTop: '10px'}}></div>
    </div>
  );
}

export default Test
