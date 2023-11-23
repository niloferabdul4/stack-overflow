import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Home = () => {
  return (
    <div>
      <div className="home_container_1">
          <LeftSidebar/>
          <div className="home_container_2">
               <HomeMainbar/>
               <RightSidebar/>
          </div>
      </div>
    </div>
  )
}

export default Home
