import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';

class Blog extends Component {
  constructor(props){
      super(props)
  }

getRandomDate = () => {
    let date = new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        year = date.getFullYear(),
        month = months[date.getMonth()],
        day = date.getDate();

    return `${month} ${day}, ${year}`;
}
getRandomTag = () => {
    let tags = ['lifestyle','travelling', 'nightlife'],
        tag = tags[Math.floor(Math.random()*tags.length)];
        
    return tag;    
}

render() {
let imgSrc = this.props.image ? this.props.image : '',
    randomDate = this.getRandomDate(),
    randomTag = this.getRandomTag();

const TemplatewithImg = imgSrc ?  <div>
                                    <div className="image-container"> 
                                        <img className="blog-image" src={imgSrc}></img>  
                                    </div>
                                    <i class="fa fa-image icon-image"></i>
                                    <div className="tag">{randomTag}</div>
                                    <div className="title-container">
                                        <h6 className="blog-title">{this.props.title}</h6>
                                    </div>
                                    <div className="date">{randomDate}</div>
                                    <div className="link-container">
                                        <a href="" className="read-more-btn">Read more</a>
                                    </div>
                                    
                                </div> 
                                : 
                                <div>
                                    <i class="fa fa-pencil edit-icon"></i>
                                    <div className="tag">{randomTag}</div>
                                    <div className="title-container">
                                        <h6 className="blog-title">{this.props.title}</h6>
                                    </div> 
                                    <div className="date">{randomDate}</div>
                                    <div className="blog-body-container">
                                        <p className="blog-body">{this.props.body}</p>
                                    </div>
                                    <div className="link-container">
                                        <a href="" className="read-more-btn">Read more</a>
                                    </div>
                                </div>

return ( 
    <div className="blog-card">
        {TemplatewithImg}  
    </div>   
);
}
}
export default Blog;
