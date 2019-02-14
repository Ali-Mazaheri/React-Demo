import React, { Component } from 'react';
import { CustomCheckBox } from './CustomCheckBox';

export class TodoItem extends Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        };
    }

    private updateStore(newState) {
        this.setState(newState);
        this.props.updateStore && this.props.updateStore();
    }
    render() {
        let { item } = this.state;
        return (
            <div className="todoItem">
                <CustomCheckBox checked={item.done} onChanged={(state) => {
                    let newState = state;
                    Object.assign(this.state.item, { done: newState });
                    this.updateStore(this.state.item);
                }} />

                <input className={"TodoTitle" + (item.done ? " done" : "")} type="text" value={item.title} onChange={(e) => {
                    let newState = e.currentTarget.value;
                    Object.assign(this.state.item, { title: newState });
                    this.updateStore(this.state.item);

                }} />
                <span className="button"
                    onClick={
                        () => {
                            this.props.deleteItem && this.props.deleteItem(item);
                        }
                    }
                >&#x2716;</span>
            </div>
        );
    }
}