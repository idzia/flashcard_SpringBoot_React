import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import flashcardReducer from './flashcardReducer';
import learnReducer from './learnReducer';


const allReducers = combineReducers({
    categoryList: categoryReducer,
    flashcardList: flashcardReducer,
    flashcardToLearn: learnReducer,
});

export default allReducers;