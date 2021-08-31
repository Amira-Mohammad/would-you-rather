import { saveQuestion, answerQuestion } from '../utils/api'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_Q_ANSWER = 'SAVE_Q_ANSWER';


export function receiveQuestion(questions) {
    return {
        type: RECEIVE_QUESTION,
        questions
    }

}

function addQuestion(question) {

    return {
        type: ADD_QUESTION,
        question
    }

}

function saveQuestionAnswer(payload) {

    return {
        type: SAVE_Q_ANSWER,
        payload
    }

}


export function handleAnswerQuestion(authedUser, qid, answer) {
    return (dispatch) => {


        return answerQuestion(
            {
                authedUser,
                qid,
                answer,
            }

        ).then(() => {
            dispatch(saveQuestionAnswer({ authedUser, qid, answer }))
        })

    }

}





export function handleAddQuestion(optionOne, optionTwo, author) {
    return (dispatch, getState) => {
        return saveQuestion(
            {
                optionOneText: optionOne,
                optionTwoText: optionTwo,
                author,
            }
            //     {
            //     optionOne,
            //     optionTwo,
            //     author
            // }
        ).then((question) => {
            dispatch(addQuestion(question))
        })

    }

}