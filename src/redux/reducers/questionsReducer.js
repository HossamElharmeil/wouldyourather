export const GET_QUESTIONS = 'GET_QUESTIONS'

const initialState = {}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...action.questions
            }
        
        default:
            return state
    }
}

export default questionsReducer