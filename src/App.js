import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolbarComponent from './components/ToolBarComponent';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
    <ToolbarComponent />
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
