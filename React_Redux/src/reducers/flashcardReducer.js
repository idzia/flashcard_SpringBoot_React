import {GET_FLASHCARD_LIST, ADD_FLASHCARD} from '../actions/types';

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case GET_FLASHCARD_LIST:
        return action.payload;
        case ADD_FLASHCARD:
        return [...state, action.payload];
        default:
        return state;
        
    }
}