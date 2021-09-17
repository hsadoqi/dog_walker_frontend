import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Owners from './Owners'
import OwnerForm from './OwnerForm'
import Owner from './Owner'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/owners" component={Owners}/>
            <Route exact path="/newowner" component={OwnerForm}/>
            <Route exact path="/owners/:id" component={Owner}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
