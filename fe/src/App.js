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
import Sidebar from "./Components/Menu/SideBar/Sidebar"
function App() {
  return (
    <div className="App">
      <Sidebar />
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
