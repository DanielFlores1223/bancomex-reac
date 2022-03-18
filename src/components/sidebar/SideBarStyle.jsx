import styled from 'styled-components';

export const SideBarStyle = styled.div `
     grid-area: sidemenu;
     border-right: 2px var(--grayPrimary) dashed;
     
     .navegation-body {
          padding: 0 1.3rem;
     }

     nav {
          margin: 1rem 0;
     }

     h5 {
          margin: 0.5rem 0;
          text-transform: uppercase;
     }

     a {
          padding-left: 1rem;  
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-decoration: none;
          color: #95A5A6;
          font-size: 14px;
          height: 40px;
     }

     a:hover {
          background-color: var(--blueLow);
          color: white;
          border-radius: 10px;
     }

     a span {
          margin-left: 0.8rem;
     }
  
     
`



