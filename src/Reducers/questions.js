import { RECEIVE_QUESTION, ADD_QUESTION, SAVE_Q_ANSWER } from '../Actions/Questions';

export default function questions(state = {}, action) {

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
            const votes = state[action.qid][action.answer].votes
            console.log('statex', state);

            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: votes.concat([action.authedUser])
                    }
                }
            }

        default:
            return state
    }
}