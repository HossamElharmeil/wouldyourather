import { useDispatch, useSelector } from "react-redux"
import { saveVote } from "../redux/actions/questionsActions"

const Question = ({ question }) => {
    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.authedUser).id
    const qid = question.id

    const handleVote = (answer) => {
        dispatch(saveVote(authedUser, qid, answer))
    }

    return <div>
        <span onClick={() => handleVote('optionOne')}>{question.optionOne.text}</span>
        <span onClick={() => handleVote('optionTwo')}>{question.optionTwo.text}</span>
    </div>
}

export default  Question