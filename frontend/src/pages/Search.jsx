import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Albums from '../components/Albums.jsx';
import Header from '../components/Header.jsx';
import SearchField from '../components/SearchField.jsx';
import '../styles/Search.css';

function Search() {
  const [albumSection] = useAutoAnimate();
  return (
    <section className="search-page">
      <Header />
      <SearchField />
      <main ref={albumSection}>
        <Albums />
      </main>
    </section>
  );
}

export default Search;
