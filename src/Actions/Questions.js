export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

export function receiveQuestion(questions) {
    return {
        type: RECEIVE_QUESTION,
        questions
    }

}