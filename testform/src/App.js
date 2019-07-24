import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor() {
    super()
    this.state = {
      firstName:"",
      message:"",
      email:""
    }
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value

    })
  }
  
  handleSubmit(e){
    e.preventDefault()
    const { firstName, message, email } = this.state
    axios.get(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 
    'https://safe-harbor-38503.herokuapp.com'}/api/form`, {
    params: {
      firstName,
      message,
      email
    } }).then((response)=>
      {console.log(response)
    }).catch((err)=>
      {console.log(err)
    })
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a> */}
        <form onSubmit={this.handleSubmit}>
          <input className="field" type="text" name="firstName" placeholder="FirstName" 
          value={this.state.firstName} 
          onChange={this.handleChange}/>
          <input className="field" type="text" name="message" placeholder="Message" 
          value={this.state.message} onChange={this.handleChange}/>
          <input className="field" type="text" name="email" placeholder="your email" 
          value={this.state.email} onChange={this.handleChange}/>
        </form>
        <button type="submit">button</button>
        
      
      </header>
    </div>
    )
  }     
}

export default App;
