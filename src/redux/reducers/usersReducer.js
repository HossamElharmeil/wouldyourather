export const GET_USERS = 'GET_USERS'

const initialState = {}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        
        default:
            return state
    }
}

export default usersReducer