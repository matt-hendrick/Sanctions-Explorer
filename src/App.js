//React-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

// Algolia Search
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'NX53QMBAV4',
  '5c5efa3a5e4e787099972c0ef9ef86b7'
);

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="SanctionsExplorer">
      <Router>
        <Navbar style={{ zIndex: '1' }} />
        <Switch>
          <Route path="/search" exact component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </InstantSearch>
  );
}

export default App;
