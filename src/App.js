import React, { Component } from 'react';
import Button from './components/Button'
import logo from './logo.svg';
import './App.css';


export default class App extends Component {

  constructor(){
    super();
    this.state={
      count:0
    }
  }
 
  incrementCount=() =>{
    this.setState({
      count: this.state.count +1
    })
  }

  decrementCount=() => {
    this.setState({
      count: this.state.count -1
    })
  }

  render(){
    let {count} = this.state
     return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
     
      <div>
        <h2>Count: { count } </h2>
        <div class="buttons">
          <Button title = { "+" } action = {this.incrementCount } class="btn btn-info mr-3"/>
          <Button title = { "-" } action = {this.decrementCount }  class="btn btn-danger"/>
        </div> 
     </div>
     </header>
    </div>
  );
  }
 
}
