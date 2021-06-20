//React-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar style={{ zIndex: '1' }} />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
