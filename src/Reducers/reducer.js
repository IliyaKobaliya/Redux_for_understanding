import initialState from '../Data_Base/Exercises'
export default function makeStore(state = initialState, action) {
    if (action.type === 'Morning') {
        return state = action.payload;
    }
    else if (action.type === 'Day') {
        return state = action.payload;
    }
    else if (action.type === 'Evening') {
        return state = action.payload;
    }
    else if (action.type === 'AllDay') {
        return state = action.payload;
    }
    else if (action.type === 'DeleteItem') {
        return state = action.payload;
    }
    return state;
}
