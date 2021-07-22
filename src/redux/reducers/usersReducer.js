export const GET_USERS = 'GET_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

const initialState = {}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        
        case SAVE_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        
        default:
            return state
    }
}

export default usersReducer