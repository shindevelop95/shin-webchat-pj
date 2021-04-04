import styled from 'styled-components/macro'

export const Container = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
`;

export const Heading = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;
    width:90%;
    margin:30px auto;
`;

export const Body = styled.div`
    flex:1;
    overflow:scroll;
    padding:30px;
   &::-webkit-scrollbar {
    display: none;
    }
    .sender{
        margin-left:auto;
        background-color:#BC4141;
        color:#FBFBFB;

    }

    .sender > .sender_inner{
        color:#eee;
    }
`;

export const Group = styled.div`
    display:flex;
    align-items:flex-end;

    .MuiAvatar-root{
        margin:20px;
    }
`

export const Footer = styled.div`
   width:90%;
   height:50px;
   margin:20px auto;
   background-color:#FFFFFF;
`;

export const Form = styled.form`
     display:flex;
    justify-content:space-between;
    align-items:center;

    .MuiSvgIcon-root{
        height:1.8em;
        width:1.8em;
        margin-right:10px;
        cursor:pointer;
        transition:0.5s;
    }

    .MuiSvgIcon-root:hover{
        transform:scale(1.2);
    }
`;

export const Input = styled.input`
    flex:1;
    height:100%;
    border:none;
    height:45px;
`;

export const Button = styled.button`
    background-color:transparent;
    border:none;
    &:focus{
        outline:none;
    }
`;

export const Message = styled.p`
    position:relative;
    font-size:20px;
    background-color:#FFFFFF;
    border-radius:10px;
    padding:35px 30px;
    width:fit-content;
    max-width:400px;
    line-height:1;
     
   
`;

export const Timestamp = styled.span`
    position:absolute;
    left:30px;
    bottom:18px;
    color:#B1A9A9;
    font-size:11px;
`;