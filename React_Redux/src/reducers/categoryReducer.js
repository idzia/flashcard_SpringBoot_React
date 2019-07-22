import {GET_CATEGORY, ADD_CATEGORY} from '../actions/types';

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case GET_CATEGORY:
        return action.payload;
        case ADD_CATEGORY:
        return [...state, action.payload];
        default:
        return state;
        
    }
}