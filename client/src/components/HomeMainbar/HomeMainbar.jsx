import React from 'react'
import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const questionsList=useSelector((state)=>state.questionsReducer)
  const user=useSelector((state)=>(state.currentUserReducer))

//   const questionList = [
//     {
//       _id: 1,
//       upVotes: 3,
//       downVotes:2,
//       noOfAnswers: 1,
//       questionTitle: 'What is a function',
//       questionBody: 'It meant to be',
//       questionTags: ['javascript', 'function', 'variable'],
//       userPosted: 'ravi',
//       userId:1,
//       askedOn: 'Jun1',
//       answer:[{answerBody:'Answer',
//                 userAnswered:'Manoj',
//                 answeredOn:'Jun 4',
//                 userId:2
// }]
//     },
//     {
//        _id: 2,
//       upVotes: 4,
//       downVotes:1,
//       noOfAnswers: 1,
//       questionTitle: 'What is a prop',
//       questionBody: 'It meant to be',
//       questionTags: ['javascript', 'function', 'variable'],
//       userPosted: 'ravi',
//       userId:1,
//       askedOn: 'Jun1',
//       answer:[{answerBody:'Answer',
//                 userAnswered:'Manoj',
//                 answeredOn:'Jun 4',
//                 userId:3
// }]

//     },
//     {
//       _id: 3,
//       upVotes: 6,
//       downVotes:2,
//       noOfAnswers: 1,
//       questionTitle: 'What is a state',
//       questionBody: 'It meant to be',
//       questionTags: ['javascript', 'variable', 'react'],
//       userPosted: 'ravi',
//       userId:1,
//       askedOn: 'Jun1',
//       answer:[{answerBody:'Answer',
//                 userAnswered:'Manoj',
//                 answeredOn:'Jun 4',
//                 userId:2
// }]
//     },
//     {
//       _id: 4,
//       upVotes: 5,
//       downVotes:4,
//       noOfAnswers: 1,
//       questionTitle: 'What is a DOM',
//       questionBody: 'It meant to be',
//       questionTags: ['javascript', 'html', 'reactjs'],
//       userPosted: 'ravi',
//       userId:1,
//       askedOn: 'Jun1',
//       answer:[{answerBody:'Answer',
//                 userAnswered:'Manoj',
//                 answeredOn:'Jun 4',
//                 userId:2
// }]
//     },
//     {
//       _id: 5,
//       upVotes: 7,
//       downVotes:4,
//       noOfAnswers: 1,
//       questionTitle: 'What is a function',
//       questionBody: 'It meant to be',
//       questionTags: ['javascript', 'function', 'variable','react full course','react beginner project','javascript function awards',
//       'javascript','html course'
//     ],
//       userPosted: 'ravi',
//       userId:1,
//       askedOn: 'Jun1',
//       answer:[{answerBody:'Answer',
//                 userAnswered:'Manoj',
//                 answeredOn:'Jun 4',
//                 userId:2
// }]
//     }]


const handleAskQuestion=()=>{
  if(user===null)
  {
    alert('please Login or Sign Up')
    navigate('/Auth')
  }
  else
    navigate('/AskQuestion')
}
   return (

    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button className="ask-btn" onClick={handleAskQuestion}>
          Ask Question
        </button>
      </div>

      <div className='main-bar-main'>
        {questionsList === null ?
          (<h1>Loading...</h1>)
          :
          (
            <>
            <p>{questionsList?.length} questions</p>
            <QuestionList questionsList={questionsList}/>
            </>
          )
        }
      </div>
    </div>
  )
}
export default HomeMainbar
