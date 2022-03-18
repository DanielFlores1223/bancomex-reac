import { SideBarStyle } from "./SideBarStyle"
import LogoColorStyle from "../Logo/LogoColorStyle"
import Logo from "../Logo/Logo"
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



