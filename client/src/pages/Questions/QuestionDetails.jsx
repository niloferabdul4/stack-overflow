import React from 'react'
import { useParams, Link } from 'react-router-dom'
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswers from './DisplayAnswers';


const QuestionDetails = () => {
    const { id } = useParams()

    const questionList = [
        {
            _id: '1',
            upVotes: 3,
            downVotes: 2,
            noOfAnswers: 1,
            questionTitle: 'What is a function',
            questionBody: 'It meant to be',
            questionTags: ['javascript', 'function', 'variable'],
            userPosted: 'ravi',
            userId: 1,
            askedOn: 'Jun1',
            answer: [{
                answerBody: 'Answer',
                userAnswered: 'Manoj',
                answeredOn: 'Jun 4',
                userId: 2
            }]
        },
        {
            _id: '2',
            upVotes: 4,
            downVotes: 1,
            noOfAnswers: 1,
            questionTitle: 'What is a prop',
            questionBody: 'It meant to be',
            questionTags: ['javascript', 'function', 'variable'],
            userPosted: 'ravi',
            userId: 1,
            askedOn: 'Jun1',
            answer: [{
                answerBody: 'Answer',
                userAnswered: 'Manoj',
                answeredOn: 'Jun 4',
                userId: 3
            }]

        },
        {
            _id: '3',
            upVotes: 6,
            downVotes: 2,
            noOfAnswers: 1,
            questionTitle: 'What is a state',
            questionBody: 'It meant to be',
            questionTags: ['javascript', 'variable', 'react'],
            userPosted: 'ravi',
            userId: 1,
            askedOn: 'Jun1',
            answer: [{
                answerBody: 'Answer',
                userAnswered: 'Manoj',
                answeredOn: 'Jun 4',
                userId: 2
            }]
        },
        {
            _id: '4',
            upVotes: 5,
            downVotes: 4,
            noOfAnswers: 1,
            questionTitle: 'What is a DOM',
            questionBody: 'It meant to be',
            questionTags: ['javascript', 'html', 'reactjs'],
            userPosted: 'ravi',
            userId: 1,
            askedOn: 'Jun1',
            answer: [{
                answerBody: 'Answer',
                userAnswered: 'Manoj',
                answeredOn: 'Jun 4',
                userId: 2
            }]
        },
        {
            _id: '5',
            upVotes: 7,
            downVotes: 4,
            noOfAnswers: 1,
            questionTitle: 'What is a function',
            questionBody: 'It meant to be',
            questionTags: ['javascript', 'function', 'variable', 'react full course', 'react beginner project', 'javascript function awards',
                'javascript', 'html course'
            ],
            userPosted: 'ravi',
            userId: 1,
            askedOn: 'Jun1',
            answer: [{
                answerBody: 'Answer',
                userAnswered: 'Manoj',
                answeredOn: 'Jun 4',
                userId: 2
            }]
        }]


    return (

        <div className='question-details-page'>
            {questionList === '' ?
                (<h1>Loading...</h1>)
                :
                (<>
                    {questionList.filter((question) => question._id === id)
                        .map((ques) => (
                            <div key={ques._id}>

                                {/******* Section 1 ************/}

                                <section key={ques._id} className="question-details-container1">
                                    <h1>{ques.questionTitle}</h1>
                                    <div className="question-details-container2">
                                        <div className="question-votes">
                                            <img
                                                src={upvote}
                                                alt=""
                                                width="18"
                                                className="votes-icon"

                                            />
                                            <p>{ques.upVotes - ques.downVotes}</p>
                                            <img
                                                src={downvote}
                                                alt=""
                                                width="18"
                                                className="votes-icon"
                                            />
                                        </div>
                                        <div style={{ width: '100%', marginLeft: '20px' }}>
                                            <p className='question-body'>{ques.questionBody}</p>
                                            <div className="question-details-tags">
                                                {ques.questionTags.map(tag => (
                                                    <p>{tag}</p>
                                                ))}
                                            </div>
                                            <div className="question-actions-user">
                                                <div className="question-details-btns">
                                                    <button type="button">Share</button>
                                                    <button type="button">Delete</button>
                                                </div>
                                                <div className='question-time-user'>
                                                    <p>asked{ques.askedOn}</p>
                                                    <Link to={`/Users/${ques.userId}`}
                                                        className="user-link"
                                                        style={{ color: "#0086d8" }}>
                                                        <Avatar backgroundColor="orange"
                                                            px="8px"
                                                            py="5px"
                                                            borderRadius="4px">{ques.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <p>{ques.userPosted}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </section>

                                    {/******* Section 2 ************/}

                                    {ques.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>{ques.noOfAnswers} Answers</h3>
                                            <DisplayAnswers
                                                key={ques._id}
                                                question={ques}

                                            />
                                        </section>

                                    )}


                                    {/******* Section 3 ************/}

                                    <section className="post-ans-container">
                                        <h3>Your Answer</h3>
                                        <form
                                        >
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"


                                            ></textarea>
                                            <br />
                                            <input
                                                type="submit"
                                                className="post-ans-btn"
                                                value="Post Your Answer"
                                            />
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {ques.questionTags.map((tag) => (
                                                <Link to="/Tags" key={tag} className="ans-tags">
                                                    {" "}
                                                    {tag}{" "}
                                                </Link>
                                            ))}{" "}
                                            or
                                            <Link
                                                to="/AskQuestion"
                                                style={{ textDecoration: "none", color: "#009dff" }}
                                            >
                                                {" "}
                                                ask your own question.
                                            </Link>
                                        </p>
                                    </section>

                            </div>


                        ))
                    }
                </>)



            }

        </div>
    )
}

export default QuestionDetails
