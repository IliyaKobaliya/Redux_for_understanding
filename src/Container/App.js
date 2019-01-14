import React, {Component} from 'react';
import List from '../Components/todoList';
import Filter from '../Components/filter'
export default class App extends Component{
    render(){
        return[
            <List key={1}/>,
            <Filter key={2}/>
        ]
    }
}


