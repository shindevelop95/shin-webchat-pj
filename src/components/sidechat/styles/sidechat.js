import styled from 'styled-components/macro'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;
    width:80%;
    margin:0 auto;
    border-bottom:2px solid #C7C3C3;
    transition:0.5s;
    cursor:pointer;
    &:hover{
        border-bottom:2px solid #E32828;
    }

   
`;

export const Info = styled.div`
    margin-left:20px;
    text-decoration:none !important;
`;

export const Header = styled.h2`
    font-size:20px;
    line-height:0.5;
`;

export const SubHeader = styled.h3`
    font-size:20px;
    font-weight:normal;
    line-height:0.5;
    color:#707070;
`;
