import { getInitialData } from '../utils/api';
import { receiveUsers } from './Users';
import { receiveQuestion } from './Questions';


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestion(questions))

        })

    }
}