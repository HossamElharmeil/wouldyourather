import { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuestion } from "../redux/actions/questionsActions"

const NewQuestion = () => {
    const [optionOneText, setOptionOneText] = useState('')
    const [optionTwoText, setOptionTwoText] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addQuestion({optionOneText, optionTwoText, author: 'tylermcginnis'}))
    }

    return <div className='new-question'>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='option-one'
                placeholder='Enter option one'
                onChange={(e) => setOptionOneText(e.target.value)}
            />
            <input
                type='text'
                name='option-two'
                placeholder='Enter option two'
                onChange={(e) => setOptionTwoText(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
}

export default NewQuestion