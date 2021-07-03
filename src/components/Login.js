import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getUsers, setUser } from "../redux/actions/usersActions"

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    
    const users = useSelector(state => state.users)
    const usersEntries = Object.entries(users)

    const handleSelect = (user) => {
        dispatch(setUser(user))
        history.push('/')
    }

    return <div>
        <ul className='users'>
            {usersEntries.map(([_, value]) => <li key={value.id} onClick={() => handleSelect(value)}>
                {value.name}
            </li>)}
        </ul>
    </div>
}

export default Login