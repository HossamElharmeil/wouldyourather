import { combineReducers } from "redux";
import authReducer from "./authReducer";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    authedUser: authReducer,
    questions: questionsReducer,
    users: usersReducer
})

export default reducer