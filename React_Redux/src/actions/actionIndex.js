import axios from 'axios';
import {GET_CATEGORY, ADD_CATEGORY} from './types';
import {GET_FLASHCARD_LIST, ADD_FLASHCARD} from './types';
import {GET_FLASHCARD_TO_LEARN} from './types';
// import {GET_FLASHCARD_TO_LEARN, MARK_AS_KNOWN} from './types';

export const getCategory = (categoryList) => {
    return {
        type: GET_CATEGORY,
        payload: categoryList,
    }
};

export const getAllCategory = () => {
    return (dispatch) => {
        return axios.get('/api/categories').then(response => {
            dispatch(getCategory(response.data))
        }).catch(error => {
            throw(error);
        });
    }
};

export const createNewCategory = (newCategory) => {
    return {
        type: ADD_CATEGORY,
        payload: newCategory,
    }
};

export const postNewCategory = (formData) => {
    return (dispatch) => {
        return axios.post('/api/categories', formData)
            .then(response => {
                dispatch(createNewCategory(response.data))})
            .catch(error => {throw(error)});
    }
};

export const getFlashcardsList = (flashcardList) => {
    return {
        type: GET_FLASHCARD_LIST,
        payload: flashcardList,
    }
}; 

export const getAllFlashcardsByCategoryId = (categoryId) => {
    return (dispatch) => {
        return axios.get('/api/flashcards/'+categoryId)
        .then(response => { dispatch(getFlashcardsList(response.data))
        }).catch(error => {
            throw(error);
        });

    }
};

export const createNewFlashcard = (newFlashcard) => {
    return {
        type: ADD_FLASHCARD,
        payload: newFlashcard,
    }
};

export const postNewFlashcard = (categoryId, formData) => {
    return (dispatch) => {
        return axios.post('/api/flashcards/'+categoryId, formData)
            .then(response => {
                dispatch(createNewFlashcard(response.data))})
            .catch(error => {throw(error)});
    }
};

export const getFlashcard = (flashcard) => {
    return {
        type: GET_FLASHCARD_TO_LEARN,
        payload: flashcard,
    }
};

export const getUnknownFlashcard = (categoryId) => {
    return(dispatch) => {
        return axios.get('/api/learn/'+categoryId)
        .then(response => {
            dispatch(getFlashcard(response.data))})
        .catch(error => {throw(error)});
    }
};
// ------------

// export const markedFlashcardAsKnown = (known) => {
//     return {
//         type: MARK_AS_KNOWN,
//         // known
//         // payload: known
//     }
// };
export const postFlashcardToMarkedAsKnown = (flashcardId, known) => {
    return (dispatch) => {
        return axios.post('/api/learn', {flashcardId: flashcardId, know: known})
            .then(response => {
                console.log(response.data)})
            .catch(error => {throw(error)});
    }
};
