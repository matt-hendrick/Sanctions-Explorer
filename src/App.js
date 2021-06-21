//React-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Test from './pages/Test/Test';

function App() {
  return (
    <Router>
      <Navbar style={{ zIndex: '1' }} />
      <Switch>
        <Route path="/search" exact component={Search} />
        <Route path="/test" exact component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
