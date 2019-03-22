import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Blogs from './Pages/Blogs';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';


class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Blogs params={this.props} {...this.props} />
        <Footer/>
      </div>  
    );
  }
}
function mapStateToProps(store) {
  return {
    Blogs : store.Blogs
  };
}

const App = connect(mapStateToProps)(Main);
export default App;
