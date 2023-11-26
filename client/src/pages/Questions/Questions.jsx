import React from 'react'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Questions = () => {
     
  return (
     <div className="home_container_1">
     <LeftSidebar/>
     <div className="home_container_2">
          <HomeMainbar/>
          <RightSidebar/>
     </div>
 </div>


  )
}

export default Questions
