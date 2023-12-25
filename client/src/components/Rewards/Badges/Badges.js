import React from 'react'
import '../Rewards.css'

import gold from '../../../assets/gold.jpeg'
import silver from '../../../assets/silver.jpeg'
import bronze from '../../../assets/bronze.jpeg'
import { badge_tags } from './badge-tags'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Badges = () => {
    const {id}=useParams()
    const User = useSelector((state) => state.currentUserReducer)
    const users = useSelector((state) => state.usersReducer)
    const selectedProfile = users?.filter(user => user._id === id)[0]
    // console.log('selectedProfile',selectedProfile)
    const currentUser=useSelector((state)=>state.currentUserReducer);
    // console.log('currentUser',currentUser)
    const navigate = useNavigate()
    return (
        <>
            <h1 style={{ fontWeight: '500', margin: '20px 0px' }} >Badges</h1>
            <div className="badges-container">
                {selectedProfile._id!==currentUser?.result._id ?                
                        (
                            <>
                                {badge_tags.map((item) => {
                                    return <>
                                        <section key={item.id}>
                                            <span style={{ display: 'flex' }}>
                                                <img className='badge-img' src={item.img} alt='gold-badge' />
                                                <div className='badges-count'>
                                                    <h1 style={{ fontSize: '30px' }}>{item.badge_count}</h1>
                                                    <p>{item.badge_name}</p>
                                                </div>
                                            </span>
                                            <div className='badge-tags'>
                                                {item.tags.map((tag) => {
                                                    return <>
                                                        <p className='tag'>{tag}</p>
                                                    </>
                                                })}
                                            </div>
                                        </section>
                                    </>
                                })}
                            </>
                        )
                              
                   :
                    (
                            <>
                                <section>
                                    <img className='badge-img' src={gold} alt='gold-badge' />
                                    <p>You don’t have a gold badge yet. Write an answer that scores 20 or more to earn your first.</p>
                                    <button className="review-btn" onClick={() => navigate('/Questions')}>Browse Questions</button>
                                </section>
                                <section>
                                    <img className='badge-img' src={silver} alt='gold-badge' />
                                    <p>You don’t have a silver badge yet. Ask a question that scores 10 or more to earn your first.</p>
                                    <button className="review-btn" onClick={() => navigate('/AskQuestion')}>Ask Question</button>
                                </section>
                                <section>
                                    <span style={{ display: 'flex' }}>
                                        <img className='badge-img' src={bronze} alt='gold-badge' />
                                        <div className='badges-count'>
                                            <h1 style={{ fontSize: '30px' }}>1</h1>
                                            <p>bronze badge</p>
                                        </div>
                                    </span>
                                    <div className='badge-tags'>
                                        <p className='tag'>Informed</p>
                                    </div>
                                </section>
                            </>
                    )
                }
            </div>
        </>
    )
}

export default Badges
