import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { FaBirthdayCake } from "react-icons/fa";
import EditIcon from '@mui/icons-material/Edit';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab';
import Badges from '../../components/Rewards/Badges/Badges';


const UserProfile = () => {

  const { id } = useParams()
  const users = useSelector((state) => state.usersReducer)
  const selectedProfile = users?.filter(user => user._id === id)[0]
  //console.log(selectedProfile)
  const currentUser=useSelector((state)=>state.currentUserReducer);
  const [toggle,setToggle]=useState(false)
 
  return (
    <div className="home_container_1">
      <LeftSidebar />
      <div className="home_container_2">
        <section style={{width:'100%'}}>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="0.6em"
                py="0.7em">
                {selectedProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{selectedProfile?.name}</h1>
                <p>
                <FaBirthdayCake style={{color:'grey'}}/> Joined{" "}
                  {moment(selectedProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id===id && (
              <button type='button' onClick={()=>setToggle(true)} className='edit-profile-btn'>
                <EditIcon/>Edit Profile
              </button>
            )
            }
          </div>
         
          <>
            {toggle ? (
              <EditProfileForm
                currentUser={currentUser}
                setToggle={setToggle}
              />
            ) : (
              <ProfileBio selectedProfile={selectedProfile} />
            )}
          </>
          
          <Badges/>
        </section>
      </div>
   <ChatBotTab/>
    </div>
  )
}

export default UserProfile
