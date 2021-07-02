export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

const initialState = {}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...action.questions
            }
        
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        
        default:
            return state
    }
}

export default questionsReducer