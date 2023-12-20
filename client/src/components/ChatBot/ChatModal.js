// components/Modal.js
import React, { useState,useEffect,useRef} from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import { useDispatch } from 'react-redux';
import {sendMessageToChatbot,fetchAllMessages} from '../../actions/chat';

const ChatModal = ({ isChatOpen, setIsChatOpen }) => {
  const User = useSelector((state) => state.currentUserReducer)
  const chats = useSelector((state) => state.chatReducer)
  const [prompt, setPrompt] = useState('')
  //const scrollRef=useRef()
  const dispatch = useDispatch()

useEffect(()=>{dispatch(fetchAllMessages())
},[dispatch,chats])


  // useEffect(() => {
  //   dispatch(fetchAllMessages(User?.result?._id));

  //   // Scroll to the latest message when messages change
  //  scrollRef.current.scrollIntoView({behaviour:'smooth'})
  // }, [dispatch, User?.result?._id,chats]);
  const handleCloseModal = () => {
    setIsChatOpen(false)
  };

  if (!isChatOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt=== "") {
      alert("Please Enter Some Text");
      return;
    }
    dispatch(sendMessageToChatbot({role:'user',prompt:prompt,userId:User?.result?._id}))

    setPrompt('')
  }

  const handleEnter=(e)=>{
    if(e.key==='Enter'){
      dispatch(sendMessageToChatbot({role:'user',prompt:prompt,userId:User?.result?._id}))
      setPrompt('')
    }
  }

  return (

    <div>
      {isChatOpen &&
        (<div className="chatbox">
          <div className="chatbox-header">
            <h3>ChatBot</h3>
            <button onClick={handleCloseModal}>
              <CloseIcon />
            </button>
          </div>
          <div className="chatbox-messages">     
         {chats.chats.map((chat,index)=>
          <Message chat={chat} key={index} />
        )}
        </div>
               
          <form onSubmit={handleSubmit} className="chatbox-footer">
            <input type='text' placeholder='Type something' onChange={(e)=>setPrompt(e.target.value)} />
            <button className='chat-send-btn' type='submit' onKeyDown={handleEnter}>
              <SendIcon color='grey' />
            </button>
          </form>
        </div>
        )
      }
    </div>
  );
};

export default ChatModal;
