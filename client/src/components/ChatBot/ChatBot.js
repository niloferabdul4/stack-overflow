import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ChatBot.css'
import ChatModal from './ChatModal'
import robot from '../../assets/airobot.png'
const ChatBot = () => {
    const [isChatOpen,setIsChatOpen]=useState(false)
    const User=useSelector((state)=>state.currentUserReducer)
    const navigate=useNavigate()
  const handleOpenModal = () => {
    setIsChatOpen(isChatOpen=>!isChatOpen)
    
  if(User===null)
  {
    alert('Please SignUp or Login To Continue')
    navigate('/Auth')
  }
    
  };

    return (
        <>
        <div>
            <img src={robot} className='chatbot-img' alt='robot'/>
            <button className='chat' onClick={handleOpenModal}>
                <h3 style={{ fontWeight: '500' }}>Chat With Us</h3>
            </button>
           {isChatOpen && <ChatModal isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen}/>}
        </div>
        </>
    )
}

export default ChatBot
