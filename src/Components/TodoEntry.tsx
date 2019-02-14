import React, { Component } from 'react';
import { TodoModel } from '../Models/TodoModel';

export class TodoEntry extends Component<any, any>{
    render() {
        return (
            <div className="todoEntry" >
                <div>
                    <input ref="inp" type="text" placeholder={"Add new item"} />
                    <span className="button"
                        onClick={
                            () => {
                                let val = (this.refs.inp as any).value || "new item ";
                                let newItem = new TodoModel(val);
                                (this.refs.inp as any).value = "";
                                this.props.onAdd && this.props.onAdd(newItem);
                            }
                        }>&#x271A;</span>
                </div>
            </div>
        );
    }
}