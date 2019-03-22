import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Blogs from './Pages/Blogs'


import './App.css';


class Main extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={()=> (
                <Blogs params={this.props} {...this.props} />
              )}
            />
          </Switch>
        </BrowserRouter>  
        </div>
      </BrowserRouter>
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
