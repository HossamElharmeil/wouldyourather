import { _getQuestions, _saveQuestion } from "../../_DATA"
import { GET_QUESTIONS, SAVE_QUESTION } from "../reducers/questionsReducer"

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