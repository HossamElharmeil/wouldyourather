import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from "../redux/actions/questionsActions"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getQuestions())
    }, [dispatch])

    const questions = useSelector(state => state.questions)
    const questionsEntries = Object.entries(questions)

    return <div>
        <ul className='questions'>
            {questionsEntries.map(([_, value]) => {
                console.log(value)
                return <li>
                    {value.id}
                </li>
            })}
        </ul>
    </div>
}

export default Home