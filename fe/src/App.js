import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Components/Authenication/Login/Login"
import Registration from "./Components/Authenication/Registration/Registration"
import Home from "./Components/Home/Home"
import { register } from './actions/actions';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/home" component={Home}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
