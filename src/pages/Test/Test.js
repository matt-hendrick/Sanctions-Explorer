import { useState } from 'react';

// Algolia Search
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { connectStateResults } from 'react-instantsearch-dom';

const Hit = ({ hit }) => <p>{hit.lastName}</p>;

const StateResults = ({ searchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;

  return (
    <div>
      <Hits hitComponent={Hit} />
      <div hidden={!hasResults}>There are {nbHits} results</div>
      <div hidden={hasResults}>There are no results</div>
    </div>
  );
};

const CustomStateResults = connectStateResults(StateResults);
const searchClient = algoliasearch(
  '8OXVTKUAVM',
  'eb4b58407b44e15f9c2e112b3eb52f47'
);

function AlgoliaSearch() {
  const [userSearch, setUserSearch] = useState('');

  const handleUserSearchChange = (event) => {
    const updatedUserSearch = event.target.value;
    setUserSearch(updatedUserSearch);
  };

  console.log(userSearch);
  return (
    <InstantSearch searchClient={searchClient} indexName="SanctionsExplorer">
      <SearchBox
        searchState={{ query: userSearch }}
        onChange={handleUserSearchChange}
      />
      {userSearch ? <CustomStateResults /> : null}
    </InstantSearch>
  );
}

export default AlgoliaSearch;
