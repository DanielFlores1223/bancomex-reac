import styled from 'styled-components';

export const ContainerStyle = styled.div `
     display: grid;
     grid-template-columns: 280px 1fr 1fr 1fr 1fr;
     grid-template-rows: 1fr 1fr 1fr 60px;
     gap: 0px 0px;
     grid-auto-flow: row;
     grid-template-areas:
       "sidemenu menu menu menu menu"
       "sidemenu content content content content"
       "sidemenu content content content content"
       "footer footer footer footer footer";
       height: 100vh;
     
      
     & * {
        border: 1px solid red;
        position: relative;
         
     }
     
     & *::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        justify-content: center;
         
     }
     
`



