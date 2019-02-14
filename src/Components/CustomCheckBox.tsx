import React, { Component } from "react";

export class CustomCheckBox extends Component<any, any> {
    uniqueId: string;
    constructor(props) {
        super(props);
        this.uniqueId = "Ch" + Math.random();
    }

    onChanged(state) {
        this.props.onChanged && this.props.onChanged(state);
    }

    render() {
        let { checked } = this.props;
        return <span className="customCheckbox">
            <input id={this.uniqueId} type="checkbox" checked={checked}
                onChange={(e) => { this.onChanged(e.currentTarget.checked) }} />
            <label htmlFor={this.uniqueId}></label>
        </span>
    }
}