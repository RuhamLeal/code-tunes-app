import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import FavMusics from '../components/FavMusics.jsx';
import Header from '../components/Header.jsx';
import '../styles/Favorites.css';

function Favorites() {
  const [favoritesSection] = useAutoAnimate();
  return (
    <main className="favorites-page">
      <Header />
      <main className="favorites-main" ref={favoritesSection}>
        <FavMusics />
      </main>
    </main>
  );
}

export default Favorites;
