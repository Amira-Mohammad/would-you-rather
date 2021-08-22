import { RECEIVE_QUESTION } from '../Actions/Questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}