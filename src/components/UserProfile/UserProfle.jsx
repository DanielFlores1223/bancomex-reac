import React from 'react'
import Icon from '../common/icon/Icon'
import UserProfileStyle from './UserProfleStyle'

export default function UserProfile() {
  return (
      <>
        <UserProfileStyle>
              <Icon src='images/user.png' type='28' />
              <div>
                  <p className='nameUser'>UserProfile</p>
                  <p>Role</p>
              </div>
        </UserProfileStyle>
      </>
  )
}
