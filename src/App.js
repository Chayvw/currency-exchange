import logo from './logo.svg';
import './App.css';
import Welcome from '../src/containers/Welcome';
import Main from './componets/Main';
import Form from './componets/Form';
import Results from './componets/Results';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h3>App</h3>
     <Router>
       <Switch>
       <Route exact path='/' component={Welcome} />
       <Route path='/main' component={Main} />
       <Route path='/form' component={Form} />
       <Route path='/results' component={Results} />
       </Switch>
     </Router>

    </div>
  );
}

export default App;
