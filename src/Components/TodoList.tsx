import React, {Component} from 'react';
import { TodoItem } from './TodoItem';



export class TodoList extends Component<any, any>{

    constructor(props){
        super(props);

        this.state= {data:this.props.data}
    }

    deleteItem(item){
        let ind = this.state.data.indexOf(item);
        if (ind > -1){
            this.state.data.splice(ind, 1);
            this.setState({data:this.state.data});
        }
    }

    render(){
        let data = this.state.data;
        return (
            <div>
                {data.map((item,index)=><TodoItem key={item.id} deleteItem={this.deleteItem.bind(this)} item={item} />)}
            </div>
        );
    }
}