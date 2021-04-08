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
    @media only screen and (max-width:1200px) {
        font-size:18px;
        line-height:1
    } 

    @media only screen and (max-width: 992px) {
        font-size:16px;
        line-height:1
    }
    @media only screen and (max-width: 768px) {
        font-size:14px;
        line-height:1
    } 
`;

export const SubHeader = styled.h3`
    font-size:20px;
    font-weight:normal;
  
    color:#707070;
    @media only screen and (max-width:1200px) {
        font-size:18px;
        line-height:1
    } 

    @media only screen and (max-width: 992px) {
        font-size:16px;
        line-height:1
    }
    @media only screen and (max-width: 768px) {
        font-size:14px;
        line-height:1
    } 
`;
