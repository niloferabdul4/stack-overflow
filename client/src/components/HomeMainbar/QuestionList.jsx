import React from 'react'
import Question from './Question'

const QuestionList = ({questionList}) => {

    console.log(questionList)
  return (
    <div className='question-list-container'>
      {questionList.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  )
}

export default QuestionList
