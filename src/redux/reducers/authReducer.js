export const SET_USER = 'SET_USER'

const initialState = null

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...action.authedUser
            }
        
        default:
            return state
    }
}

export default authReducer