import { _getQuestions } from "../../_DATA"
import { GET_QUESTIONS } from "../reducers/questionsReducer"

export const getQuestions = () => dispatch => {
    _getQuestions()
        .then(questions => {
            dispatch({
                type: GET_QUESTIONS,
                questions
            })
        })
}