import React from 'react'

const ProfileBio = ({selectedProfile}) => {
  return (
  
      <>
       <div>
      <div>
        {selectedProfile?.tags.length !== 0 ? (
          <>
            <h4 style={{margin:'10px 0px'}}>Tags watched</h4>
            {selectedProfile?.tags.map((tag) => (
              <p  key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p style={{margin:'8px 0px'}}>0 tags watched</p>
        )}
      </div>
      <div>
        {selectedProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{selectedProfile?.about}</p>
          </>
        ) : (
          <p style={{margin:'8px 0px'}}>No bio found</p>
        )}
      </div>
    </div>
      </>
  
  )
}

export default ProfileBio
