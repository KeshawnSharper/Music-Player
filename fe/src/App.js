import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./Components/Authenication/Login/Login"
import Registration from "./Components/Authenication/Registration/Registration"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Login />
            </Route> 
          <Route exact path="/register">
          <Registration />
            </Route> 
        </Switch>
    </Router>
    </div>
  );
}

export default App;
