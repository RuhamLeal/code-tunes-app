import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AlbumMusics from '../components/AlbumMusics.jsx';
import Header from '../components/Header.jsx';

function Album() {
  const [musicsSections] = useAutoAnimate();
  return (
    <main>
      <Header />
      <main ref={musicsSections}>
        <AlbumMusics />
      </main>
    </main>
  );
}

export default Album;
