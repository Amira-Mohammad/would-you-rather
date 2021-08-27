import { RECEIVE_QUESTION, ADD_QUESTION, SAVE_Q_ANSWER } from '../Actions/Questions';

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

        case SAVE_Q_ANSWER:
            return {
                ...state,
                ...action.answer
            }

        default:
            return state
    }
}