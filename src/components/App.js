import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Search from "../components/Search/Search";
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
              <hr/>
              <Route exact path = "/" component={Search}/>
              <hr/>
            <Body />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
