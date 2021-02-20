import logo from './logo.svg';
import './App.css';
import loginValidation from './components/loginValidation';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/LoginDetails';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={loginValidation} />
            <Route exact path='/table' component={Table} />



       </Switch>
     </Router>
    </div>
  );
}

export default App;
