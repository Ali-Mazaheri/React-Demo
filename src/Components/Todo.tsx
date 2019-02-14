import React, { Component } from "react";
import { TodoList } from "./TodoList";
import { TodoEntry } from "./TodoEntry";

export class Todo extends Component<any, any> {
  render() {
    return (
      <div className="todoComponent">
        <TodoEntry
          onAdd={item => {
            this.props.data.push(item);
            this.forceUpdate();
            this.props.updateStore && this.props.updateStore();
          }}
        />
        <hr />
        <TodoList
          updateStore={this.props.updateStore.bind(this)}
          data={this.props.data}
        />
      </div>
    );
  }
}
