import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';
import Blog from '../../Components/Blog'

class Blogs extends Component {
  constructor(props){
      super(props)
  }
  componentDidMount() {
    let propsParam = this.props;
    actions.getData(propsParam);
  }
  render() {
    let BlogData = this.props ? this.props.Blogs.data : '';
    const RenderBlogs = BlogData? BlogData.map((blog,key) =>
          <Blog params={this.props} {...blog}/>
        ):''
    return ( 
       <div className="blogs-container">

          <div className="blogs">
            {RenderBlogs}
          </div>

       </div>  
    );
  }
}
export default Blogs;
