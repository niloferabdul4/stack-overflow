import React from 'react'
import { useSelector } from 'react-redux'
import robotavatar from '../../assets/robot.png'
import Avatar from '../Avatar/Avatar'

const Messages = ({chatInput}) => {
    const User = useSelector((state) => state.currentUserReducer)
    const chatResponse=useSelector((state)=>state.chatReducer)
    console.log(chatResponse)
    console.log(chatInput)
  return (
    <>
        <div className="message purple">
              <p>hai</p>
              <img className='chat-message-avatar' src={robotavatar} alt='' />
            </div>

            <div className="message golden">
              <p>{chatInput}</p>
              <Avatar backgroundColor='purple' borderRadius='50%' color='white' px='2px' py='6px'>{User?.result?.name.charAt(0).toUpperCase()}</Avatar>
            </div>
    </>
  )
}

export default Messages
