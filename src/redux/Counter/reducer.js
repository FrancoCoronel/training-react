import Immutable from 'seamless-immutable';
import { actions } from './actions';

const initialState = {
    count: 0
};

function reducer(state = Immutable(initialState), action) {
    console.log('reducer running', action);
    switch(action.type){
        case actions.INCREMENT:
            return {
                count: state.count + 1
            };
        case actions.DECREMENT:
            return {
                count: state.count - 1
            };
            default:
                return state;
    }
};

export default reducer;