//React-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          {/* <Route exact path="/trips/:tripID" component={Trip} />
              <Route exact path="/demo" component={Demo} /> */}
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
