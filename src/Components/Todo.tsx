import React, { Component } from 'react';
import { TodoList } from './TodoList';



export class Todo extends Component<any, any>{
    render() {
        return (
            <div className="todoComponent" >
                <div>
                    <input ref="inp" type="text" placeholder={"Add new item"} />
                    <span onClick={
                        () => {
                            let val = (this.refs.inp as any).value || "new item ";
                            this.props.data.push({ id: Math.random(), title: val });
                            (this.refs.inp as any).value = "";
                            this.forceUpdate();
                        }
                    }>&#x271A;</span>
                </div>
                <div>
                ....................................................
                </div>
                <div>
                    <TodoList data={this.props.data} />
                </div>
            </div>
        );
    }
}