import React from 'react'
import { useSelector } from 'react-redux'
import robot from '../../assets/robot.png'
import moment from 'moment'
const Message = ({ chat }) => {
  const User = useSelector((state) => state.currentUserReducer)

  return (
    <div>

      <div className="message user-message">
        <h3 style={{ fontWeight: 500 }}>{`${User?.result?.name}: `}</h3>
        <p>{chat.prompt}</p>
        <small>{moment(chat.timestamp).fromNow()}</small>
      </div>
      <div className='message bot-message'>
        <img className='chat-message-image' src={robot} alt='' />
        <p>{chat.botResponse}</p>
        <small>{moment(chat.timestamp).fromNow()}</small>
      </div>
    </div>
  )
}

export default Message
