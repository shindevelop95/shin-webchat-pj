import styled from 'styled-components/macro'

export const Container = styled.div`
    width:80%;
    margin:30px auto;
`;

export const ButtonText = styled.h2`
    font-weight:normal;
    font-size:20px;
    padding-left:10px;
    border-left:2px solid #C7C3C3;
    @media only screen and (max-width:1200px) {
        font-size:18px;
    } 

    @media only screen and (max-width: 992px) {
        font-size:16px;
    }
    @media only screen and (max-width: 768px) {
        font-size:14px;
    } 
    
`;

export const Header = styled.h1`
    font-size:30px;
    @media only screen and (max-width:1200px) {
        font-size:26px;
    } 

    @media only screen and (max-width: 992px) {
        font-size:22px;
    }
    @media only screen and (max-width: 768px) {
        font-size:18px;
    } 
`;

export const Btn = styled.div`

`;

export const Group = styled.div`
    display:flex;
    align-items:center;
    width:95%;
    font-size:20px;
    margin:auto;
    height:35px;
    border:none;
    background-color:#ECECEC;
    padding:10px;
    border-radius:20px;

    .MuiSvgIcon-root{
            color:#E32828;
            background-color:#ECECEC;
            height:30px!important;
            width:30px!important;
    }
`

export const BtnGroup = styled.button`
    width:100%;
    display:flex;
    align-items:center !important;
    background-color:#FFFFFF;
    border:none;
    justify-content:center!important;
    cursor:pointer;
    border-radius:20px;
    transition:.5s;
    &:hover{
        background-color:#E32828;
        color:#FFFFFF;
        .MuiSvgIcon-root{
            color:white;
        }
    }

`;

export const Input = styled.input`
    background-color:#ECECEC;
    height:30px;
    border:none;
    width:100%;
    
    &:focus{
        outline:none;
    }

    
`