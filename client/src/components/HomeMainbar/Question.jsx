import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
const Question = ({ question }) => {

  return (

    <div className="display-question-container">
      <div className="display-votes-ans">
        <div className="votes">
          <p>{question.upVote.length - question.downVote.length} </p>
          <p>votes</p>
        </div>
        <div className="ans">
          <p>{question.noOfAnswers} </p>
          <p>{question.noOfAnswers > 1 ? 'answers' : 'answer'}</p>
        </div>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className='question-title-link'>
          {question.questionTitle}
        </Link>


        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className='display-time'>{` asked on ${moment(question.askedOn).fromNow()}    ${question.userPosted}`} </p>

        </div>
      </div>
    </div>


  )

}

export default Question
