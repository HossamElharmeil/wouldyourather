import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../_DATA"
import { GET_QUESTIONS, SAVE_QUESTION } from "../reducers/questionsReducer"
import { SAVE_ANSWER } from "../reducers/usersReducer"

export const getQuestions = () => dispatch => {
    _getQuestions()
        .then(questions => {
            dispatch({
                type: GET_QUESTIONS,
                questions
            })
        })
}

export const addQuestion = question => dispatch => {
    _saveQuestion(question)
        .then(formattedQuestion => {
            console.log(formattedQuestion)
            dispatch({
                type: SAVE_QUESTION,
                question: formattedQuestion
            })
        })
}

export const saveVote = (authedUser, qid, answer) => dispatch => {
    _saveQuestionAnswer({ authedUser, qid, answer })
        .then(_ => {
            //TODO: update redux store
            dispatch({
                type: SAVE_ANSWER,
                authedUser,
                qid,
                answer
            })
        })
}