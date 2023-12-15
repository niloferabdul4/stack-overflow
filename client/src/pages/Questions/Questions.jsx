import React from 'react'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { useSelector } from 'react-redux'
import ToggleSidebar from '../../components/ToggleSidebar/ToggleSidebar'
import ChatBot from '../../components/ChatBot/ChatBot'

const Questions = () => {
  const isSidebarOpen=useSelector((state)=>(state.Reducer))
  return (
     <div className="home_container_1">
     <LeftSidebar/>
     {isSidebarOpen===true && <ToggleSidebar/>}
     <div className="home_container_2">
          <HomeMainbar/>
          <ChatBot/>
          <RightSidebar/>
     </div>
 </div>


  )
}

export default Questions
