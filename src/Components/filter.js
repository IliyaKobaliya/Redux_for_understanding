import React, {Component} from 'react';
import {connect} from 'react-redux';

class Filter extends Component {
    render() {
        this.morning = <button onClick={() => this.props.onMorning(this.props.Store)}>MORNING</button>;
        this.day = <button onClick={() => this.props.onDay(this.props.Store)}>DAY</button>;
        this.evening = <button onClick={() => this.props.onEvening(this.props.Store)}>EVENING</button>;
        this.allDay = <button onClick={() => this.props.onAllDay(this.props.Store)}>ALL DAY</button>;
        return (
            <div>
                {this.morning}
                {this.day}
                {this.evening}
                {this.allDay}
            </div>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    action => ({
        onMorning: (store) => {
            store.map(items => (items.key >= 1 && items.key <= 3) ? items.isShow = true : items.isShow = false);
            action({type: 'Morning', payload: [...store]});
        },
        onDay: (store) => {
            store.map(items => (items.key === 4 || items.key === 5 || items.key === 6) ? items.isShow = true : items.isShow = false);
            action({type: 'Day', payload: [...store]});
        },
        onEvening: (store) => {
            store.map(items => (items.key === 7 || items.key === 8) ? items.isShow = true : items.isShow = false);
            action({type: 'Evening', payload: [...store]});
        },
        onAllDay: (store) => {
            store.map(items => items.isShow = true);
            action({type: 'AllDay', payload: [...store]});
        }
    })
)(Filter)