import { RECEIVE_QUESTION, ADD_QUESTION, SAVE_Q_ANSWER } from '../Actions/Questions';

export default function questions(state = { "1": {} }, action) {
    switch (action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }

        case SAVE_Q_ANSWER:
            const { payload } = action
            console.log('xaction', action);
            const updatedAnswer = {
                ...state[payload.qid]
            }
            updatedAnswer[payload.answer].votes.concat(payload.authedUser)
            const statePayload = state[payload.qid]
            return {
                ...state,
                state[payload.qid]: updatedAnswer
            }

        default:
            return state
    }
}