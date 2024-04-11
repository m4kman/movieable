import React from 'react';

import Landing from '../Landing';
import SearchResults from '../SearchResults';
import getAPIData from '../../utils/useAPI';

const SEARCH_API = import.meta.env.VAULT_SEARCH_ENDPOINT;

function Home() {
  const [search, setSearch] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isShowingCards, setIsShowingCards] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getAPIData(
      SEARCH_API,
      `?query=${search}&include_adult=false`
    );
    setSearchResults(data.results);
    setSearch('');
    setIsShowingCards(true);
  }

  return (
    <>
<<<<<<< HEAD
=======
      <Navbar />
>>>>>>> main
      {!isShowingCards ? (
        <Landing search={search} setSearch={setSearch} handler={handleSubmit} />
      ) : (
        <SearchResults
          movieData={searchResults}
          setIsShowingCards={setIsShowingCards}
          setSearchResults={setSearchResults}
        />
      )}
    </>
  );
}

export default Home;
