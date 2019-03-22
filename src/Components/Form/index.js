import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
      email: '',
      message: ''
    }
  }
  handleNameChange = event => {
    event.preventDefault();
    this.setState({
      name : event.target.value
    })
  }

  handleEmailChange = event => {
    event.preventDefault();
    this.setState({
      email : event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("name",this.state.name);
    localStorage.setItem("email",this.state.email);
    this.setState({
      message : "Form has been successfully submitted. Thank you."
    })
    setTimeout(
      ()=> {
        this.setState({
          message : '',
          name : '',
          email: ''
          }
        )
      }, 5000)
  }

  render() {
    return ( 
      <div className="Forms-container">
        <div className="container">
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <label className="signup-message">
                Sign up for newsletter
              </label>
              <label>
                <input type="text" value={this.state.value} onChange={this.handleNameChange}  placeholder="Your Name" required/>
              </label>
              <label>
                <input type="email" value={this.state.value} onChange={this.handleEmailChange}  placeholder="Your Email Address" required/>
              </label>
              <input type="submit" value="Subscribe now" />
            </form>
            {this.state.message}
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
