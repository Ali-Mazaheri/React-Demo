import React, {Component} from 'react';



export class TodoItem extends Component<any, any>{

    constructor(props){
        super(props);
        this.state = {item:this.props.item};
    }

    render(){
        let {item} = this.state;
        return (
            
            <div>
                <input type="checkbox" checked={item.done} onChange={(e)=>{
                        let newState = e.currentTarget.checked; 
                        Object.assign(this.state.item, {done: newState });
                        this.setState(this.state.item);

                }} />
                <input type="text" value={item.title} onChange={(e)=>{
                        let newState = e.currentTarget.value; 
                        Object.assign(this.state.item, {title: newState });
                        this.setState(this.state.item);

                }}/>
                <span
                onClick={
                    ()=>{
                        this.props.deleteItem && this.props.deleteItem(item);
                    }
                }
                >&#x2716;</span>
            </div>
        );
    }
}