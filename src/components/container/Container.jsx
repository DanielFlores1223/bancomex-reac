import { ContainerStyle } from "./ContainerStyle"
import SideBar from "../sidebar/SideBar"
import Content from "../content/Content" 
import Footer from '../footer/Footer';

function Container(  ) {
  return (
    <ContainerStyle>
       <SideBar />
       <Content />
       <Footer />
    </ContainerStyle>
  )
}

export default Container