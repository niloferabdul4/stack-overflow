import React from 'react'
import './AskQuestion.css'
import { useNavigate } from 'react-router-dom';
const AskQuestion = () => {
    const user = null;
    const navigate = useNavigate()
    const redirect = () => {

        navigate('/Auth')
    }
    return (
        <div className='ask-question'>
            <div className="ask-question-wrapper">
                <h1>Ask a Question</h1>
                <form className='ask-question-form'>
                    <label htmlFor="ask-ques-title" className='ask-question-label'>

                        <h4>Title</h4>
                        <p>
                            Be specific and imagine you’re asking a question to another
                            person
                        </p>
                        <input
                            type="text"
                            id="ask-ques-title"
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                            className='ask-question-input'
                        />
                    </label>
                    <label htmlFor='ask-ques-body' className='ask-question-label'>
                        <h4>Body</h4>
                        <p>
                            Include all the information someone would need to answer your
                            question
                        </p>
                        <textarea cols="30"
                            id='ask-ques-body'
                            rows="10"
                            className='ask-question-textarea' />
                    </label>
                    <label htmlFor="ask-ques-tags" className='ask-question-label'>
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input
                            type="text"
                            id="ask-ques-tags"
                            placeholder="e.g. (xml typescript wordpress)"
                            className='ask-question-input'
                        />

                    </label>
                </form>
                <button className="review-btn" >
                    Review Your Question
                </button>
            </div>
        </div>

    )
}

export default AskQuestion
