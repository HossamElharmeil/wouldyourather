import { useState } from "react"

const NewQuestion = () => {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(optionOne, optionTwo)
    }

    return <div className='new-question'>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='option-one'
                placeholder='Enter option one'
                onChange={(e) => setOptionOne(e.target.value)}
            />
            <input
                type='text'
                name='option-two'
                placeholder='Enter option two'
                onChange={(e) => setOptionTwo(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
}

export default NewQuestion