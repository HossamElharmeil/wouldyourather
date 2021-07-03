const Question = ({ question }) => {
    return <div>
        <span>{question.optionOne.text}</span>
        <span>{question.optionTwo.text}</span>
    </div>
}

export default  Question