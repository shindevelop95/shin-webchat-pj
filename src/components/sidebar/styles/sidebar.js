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
`;

export const Header = styled.h1``;

export const Btn = styled.div`

`;

export const Group = styled.div`
    display:flex;
    align-items:center;
    width:90%;
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
    
    &:focus{
        outline:none;
    }

    
`