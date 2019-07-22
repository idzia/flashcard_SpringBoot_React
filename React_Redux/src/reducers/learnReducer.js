import {GET_FLASHCARD_TO_LEARN} from '../actions/types';
// import {GET_FLASHCARD_TO_LEARN, MARK_AS_KNOWN} from '../actions/types';

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case GET_FLASHCARD_TO_LEARN:
        return action.payload;
        // case MARK_AS_KNOWN:
        // return [...state, action.payload];
        // return [...state, action.known];
        default:
        return state;
        
    }
}