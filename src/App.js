import logo from './logo.svg';
import './App.css';
import Welcome from '../src/containers/Welcome';
import Main from './componets/Main';
import Form from './componets/Form';
import Results from './componets/Results';
import Historical from './componets/Historical';
import NavBar from './containers/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Welcome />
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/main' component={Main} />
            <Route path='/form' component={Form} />
            <Route path='/results' component={Results} />
            <Route path='/historical' component={Historical} />
          </Switch>
        </Router>
        <Footer />

      </div>
   
  );

}

export default App;
