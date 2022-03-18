import React from 'react'
import Icon from '../common/icon/Icon'
import UserProfileStyle from './UserProfleStyle'

export default function UserProfile() {
  return (
      <>
        <UserProfileStyle>
              <Icon src='images/user.png' type='32' />
              <label>UserProfile</label>
        </UserProfileStyle>
      </>
  )
}
