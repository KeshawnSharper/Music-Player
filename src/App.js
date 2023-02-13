import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolbarComponent from './components/ToolBarComponent';
import Home from './pages/Home';
import Search from './pages/Search';
import { connect } from "react-redux";
import {
  getMusic
} from "./redux/reducers/actions/actions";
import Convert from "./pages/Convert";
function App(props) {

  return (
    <>
    <ToolbarComponent />
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/convert" element={<Convert/>} />
      
        </Routes>
    </BrowserRouter>
    </>

  );
}
function mapStateToProps(state) {
  return {
    songs: state.songs["library"],
  
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMusic: () => {
      dispatch(getMusic());
    }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);