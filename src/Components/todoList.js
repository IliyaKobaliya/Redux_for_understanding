import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render() {
        this.list = this.props.Store.map((item) => {
            if (item.isShow === true) {
                console.log(item.isShow);
                return (
                    <div key={item.key} className={'itemsTodo'}>
                        <li>
                            {item.title}
                        </li>
                        <div onClick={() => {
                            this.props.deleteItem(item, this.props.Store)
                        }}>X
                        </div>
                        {/*<div onClick={(event)=>{let thisElement = event.target;*/}
                        {/*thisElement.parentElement.style.cssText='display:none;';*/}
                        {/*}}>X</div>*/}
                    </div>
                )
            }
            else {
                return false
            }
        });
        return (
            <div id={'container'}>
                {this.list}
                <button onClick={()=> console.log(this.props.Store)}>store</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    action => ({
        deleteItem: (item, store) => {
            let newStore = [];
            store.map((listItem) => {
                if(listItem !== item) {newStore.push(listItem)}
                return newStore;
        });
            action({type: 'DeleteItem', payload: [...newStore]});
        }
    })
)(List)