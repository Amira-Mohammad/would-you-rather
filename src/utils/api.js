import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer

} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

// export function saveLikeToggle (info) {
//   return _saveLikeToggle(info)
// }

export function saveQuestion(info) {
  return _saveQuestion(info)
}

export function answerQuestion(answer) {
  return _saveQuestionAnswer(answer)
}