import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color:#f8f8f8;
    height:100vh;
    width:100vw;
    display:grid;
    place-items:center;
`;

export const Group = styled.div`
    padding:100px;
    text-align:center;
    background-color:white;
    border-radius:10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px;
`;

export const Image = styled.img`
    object-fit:contain;
    height:100px;
    margin-bottom:40px;
`;

export const TextGroup = styled.div``;

export const Text = styled.h2`
  
`;

export const Button = styled.button`
    margin-top:50px;
    text-transform:inherit !important;
    background-color:#E32828;
    color:white;
    padding:10px;
    border-radius:15px;
    transition:.5s;
    font-size:20px;
    cursor:pointer;

    &:focus{
        outline:none;
    }

    &:hover{
        transform:scale(1.1);
    }
`;