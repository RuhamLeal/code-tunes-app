import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import FavMusics from '../components/FavMusics.jsx';
import Header from '../components/Header.jsx';

function Favorites() {
  const [favoritesSection] = useAutoAnimate();
  return (
    <main>
      <Header />
      <main ref={favoritesSection}>
        <FavMusics />
      </main>
    </main>
  );
}

export default Favorites;
