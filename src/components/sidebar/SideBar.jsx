import { SideBarStyle } from "./SideBarStyle"
import LogoColorStyle from "../common/Logo/LogoColorStyle"
import Logo from "../common/Logo/Logo"
import UserProfileStyle from "../UserProfile/UserProfleStyle"
import UserProfile from "../UserProfile/UserProfle"

function SideBar() {
  return (
    <SideBarStyle>
    
      <LogoColorStyle>
        <Logo/>
      </LogoColorStyle>
      <UserProfileStyle>
        <UserProfile/>
      </UserProfileStyle>
         <div>
           <p>Desde side</p>
         </div>
    </SideBarStyle>
  )
}

export default SideBar



