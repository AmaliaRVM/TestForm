import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      firstName:"",
      message:"",
      email:""
    }
    this.handleChange = this.handleChange.bind(this) 
  }
  
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value

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
          Learn React
        </a> */}
        <form>
          <input type="text" name="firstName" placeholder="FirstName" value={this.state.firstName} onChange={this.handleChange}/>
          <input type="text" name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange}/>
          <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
          <button type="submit">button</button>
        </form>
        <h1>{this.state.firstName}</h1>
      
      </header>
    </div>
    )
  }     
}

export default App;
