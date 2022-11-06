import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Albums from '../components/Albums.jsx';
import Header from '../components/Header.jsx';
import SearchField from '../components/SearchField.jsx';

function Search() {
  const [albumSection] = useAutoAnimate();
  return (
    <main>
      <Header />
      <SearchField />
      <main ref={albumSection}>
        <Albums />
      </main>
    </main>
  );
}

export default Search;
