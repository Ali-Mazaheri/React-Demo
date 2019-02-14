import React, { Component } from 'react';
import { Todo } from './Components/Todo';
import { TodoModel } from "./Models/TodoModel";
import { LocalStorageService } from "./Services/LocalStorageService";

let storage = new LocalStorageService("reactDemoWFM");
const data = storage.getAll<TodoModel>();
if (!data.length) {
  data.push(new TodoModel("Add new items"));
}

export class App extends Component<any, any> {
  render() {
    return <Todo updateStore={() => { storage.write(data) }}  data={data}/>
  }
}