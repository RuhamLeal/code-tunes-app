import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AlbumMusics from '../components/AlbumMusics.jsx';
import Header from '../components/Header.jsx';
import '../styles/Album.css';

function Album() {
  const [musicsSections] = useAutoAnimate();
  return (
    <main>
      <Header />
      <main className="album-page" ref={musicsSections}>
        <AlbumMusics />
      </main>
    </main>
  );
}

export default Album;
