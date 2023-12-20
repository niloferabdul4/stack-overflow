import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './ChatBot.css'
import ChatModal from './ChatModal'
import robot from '../../assets/airobot.png'
import { fetchAllMessages } from '../../actions/chat'
const ChatBot = () => {
    const [isChatOpen,setIsChatOpen]=useState(false)
    const chats=useSelector((state)=>state.chatReducer)
    const User=useSelector((state)=>state.currentUserReducer)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    
  const handleOpenModal = () => {
      
  if(User!==null)
 {
   console.log(chats)
    setIsChatOpen(isChatOpen=>!isChatOpen)
    dispatch(fetchAllMessages())
 }
 else{
  
    alert('Please SignUp or Login To Continue')
    navigate('/Auth')

  
 }
  };

    return (
        <>
        <div>
            <img src={robot} className='chatbot-img' alt='robot'/>
            <button className='chat' onClick={handleOpenModal}>
                <h3 style={{ fontWeight: '500' }}>Hi.How can I help you..</h3>
            </button>
           {isChatOpen && <ChatModal isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen}/>}
        </div>
        </>
    )
}

export default ChatBot