import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {todos} from './todos.json'



class App extends Component {

  constructor(){
    super();
    this.state = {
     todos
    }

  }


  render() {

    const todos = this.state.todos.map((todo,index) =>{
      return(

        <div className="card" key={index}>
        {todo.tittle}
        </div>

        )
      })

    return (
      <div className="App">
          <Navigation titulo="Lista Hardcore" />
          <img src={logo} className="App-logo" alt="logo" />
        {todos}
      </div>
    );
  }
}

export default App;
