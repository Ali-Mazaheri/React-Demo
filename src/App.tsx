import React, { Component } from 'react';
import { Todo } from './Components/Todo';
import rawData from "./Utils/todoData.json"

const data = [...rawData.data];

class App extends Component<any, any> {
  render() {
    return <Todo data={data}/>
  }
}

export default App;
