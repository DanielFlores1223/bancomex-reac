import styled from 'styled-components';

const UserProfileStyle = styled.div `
    background-color: var(--grayPrimary);
    padding: 16px 20px;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3rem;

    & div {
        margin-left: 0.5rem;
    }

    & div  p{
        margin: 0;
        text-align: center;
        color: var(--grayDark);
    }

    .nameUser{
        font-weight: 600;
    }
`;


export default UserProfileStyle