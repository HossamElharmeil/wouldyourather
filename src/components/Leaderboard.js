import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/actions/usersActions"

const Leaderboard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const users = useSelector(state => state.users)
    const usersEntries = Object.entries(users)
    const sortedUsers = usersEntries.sort((a, b) => (b[1].questions.length + Object.keys(b[1].answers).length - a[1].questions.length - Object.keys(a[1].answers).length))
    console.log(sortedUsers)

    return <div>
        <ul className='users'>
            {sortedUsers.map(([key, value]) => <li key={key}>
                {value.name}
            </li>)}
        </ul>
    </div>
}

export default Leaderboard