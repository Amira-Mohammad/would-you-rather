import { saveQuestion } from '../utils/api'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

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

export function handleAddQuestion(optionOne, optionTwo, author) {
    // debugger;


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