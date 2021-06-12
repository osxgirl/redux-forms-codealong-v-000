import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import DisplayTodos from './components/todos/DisplayTodos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayTodos />
        <CreateTodo />
      </div>
    );
  }
}

export default App;
