import { _getUsers } from "../../_DATA"
import { GET_USERS } from "../reducers/usersReducer"
import { SET_USER } from "../reducers/authReducer"

export const getUsers = () => dispatch => {
    _getUsers()
        .then(users => {
            dispatch({
                type: GET_USERS,
                users
            })
        })
}

export const setUser = (authedUser) => dispatch => {
    dispatch({
        type: SET_USER,
        authedUser
    })
}