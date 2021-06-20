//React-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  return (
    <Router>
      <Navbar style={{ zIndex: '1' }} />
      <Switch>
        <Route path="/search" exact component={Search} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
