import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';

class Blogs extends Component {
  constructor(props){
      super(props)
  }
  componentDidMount() {
    let propsParam = this.props;
    actions.getData(propsParam);
  }
  render() {
    return ( 
       <div>
        <p className="App-intro">
          To get started, edit <code>Blogs/index.js</code> and save to reload.
        </p>
       </div>   
    );
  }
}
export default Blogs;
