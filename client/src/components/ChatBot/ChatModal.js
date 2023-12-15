// components/Modal.js
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Messages from './Messages';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postMessage } from '../../actions/chat';


const ChatModal = ({ isChatOpen, setIsChatOpen }) => {
  //const User=useSelector((state)=>state.currentUserReducer)
  const [chatInput,setChatInput]=useState('')
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()

  const handleCloseModal = () => {
    setIsChatOpen(false)
  };

  if (!isChatOpen) {
    return null;
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
   
   dispatch(postMessage({chatInput}))  
    setLoading(false) 
    setChatInput('')
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
               <Messages chatInput={chatInput}/>          
          </div>
          <form onSubmit={handleSubmit} className="chatbox-footer">
            <input type='text' placeholder='Type something'   onChange={(e)=>setChatInput(e.target.value)} />
            <button className='chat-send-btn' type='submit'>
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
