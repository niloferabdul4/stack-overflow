import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'

const DisplayAnswers = ({ question }) => {
    return (
        <>

            <div className='question-details-container2'>
                {question.answer.map(ans => (
                    <div className="display-ans" key={ans._id}>
                        <p className='ans-body'>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div className="question-details-btns">
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>

                            <div className='question-time-user'>
                                <p>asked {question.askedOn}</p>
                                <Link to={`/Users/${ans.userId}`}
                                    className="user-link"
                                    style={{ color: "#0086d8" }}>
                                    <Avatar backgroundColor="orange"
                                        px="8px"
                                        py="5px"
                                        borderRadius="4px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <p>{ans.userAnswered}</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </>
    )
}

export default DisplayAnswers
