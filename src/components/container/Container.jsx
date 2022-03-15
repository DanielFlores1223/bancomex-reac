import { ContainerStyle } from "./ContainerStyle"
import SideBar from "../sidebar/SideBar"
import Content from "../content/Content" 
import Footer from '../footer/Footer';
import Menu from '../menu/Menu';

function Container(  ) {
  return (
    <ContainerStyle>
       <Menu />
       <SideBar />
       <Content />
       <Footer />
    </ContainerStyle>
  )
}

export default Container