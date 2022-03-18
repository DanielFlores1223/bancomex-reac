import { SideBarStyle } from "./SideBarStyle"
import LogoColorStyle from "../common/Logo/LogoColorStyle"
import Logo from "../common/Logo/Logo"
import UserProfile from "../UserProfile/UserProfle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillTransfer  } from '@fortawesome/free-solid-svg-icons';


function SideBar() {
  return (
    <SideBarStyle>
      <LogoColorStyle>
        <Logo/>
      </LogoColorStyle>
      
      <div className="navegation-body">
        <UserProfile/> 
          <nav>
              <h5>Menú</h5>
              <a href="#"><FontAwesomeIcon icon={ faMoneyBillTransfer }/> <span>enlace</span></a>
              <a href="#"><FontAwesomeIcon icon={ faMoneyBillTransfer }/> <span>enlace</span></a>
              <a href="#"><FontAwesomeIcon icon={ faMoneyBillTransfer }/> <span>enlace</span></a>
              <a href="#"><FontAwesomeIcon icon={ faMoneyBillTransfer }/> <span>enlace</span></a>
              
          </nav>
      </div>
    </SideBarStyle>
  )
}

export default SideBar



