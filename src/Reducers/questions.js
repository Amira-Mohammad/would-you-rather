import { RECEIVE_QUESTION, ADD_QUESTION } from '../Actions/Questions';

export default function questions(state = {}, action) {
    // debugger
    switch (action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            // debugger;
            return {
                ...state,
                [action.question.id]: action.question
            }

        default:
            return state
    }
}