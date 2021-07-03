import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { getQuestions } from "../redux/actions/questionsActions"
import Question from "./Question"

const Home = () => {
    const dispatch = useDispatch()
    
    const questions = useSelector(state => state.questions)
    const authedUser = useSelector(state => state.authedUser)

    const questionsEntries = Object.entries(questions)

    useEffect(() => {
        dispatch(getQuestions())
    }, [dispatch])

    return authedUser !== null ? <div>
        <ul className='questions'>
            {questionsEntries.map(([key, value]) => {
                return <Question key={key} question={value} />
            })}
        </ul>
    </div>
        : <Redirect to='/login' />
}

export default Home