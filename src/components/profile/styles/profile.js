import styled from 'styled-components/macro'

export const Container = styled.div`
    width:80%;
    margin:auto;
    text-align:center;
    height:98%;
    overflow-y:scroll;
    ::-webkit-scrollbar {
  display: none;
}
  
`;

export const Group = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#FFFFFF;
    padding:30px 20px;
    margin-top:30px;
`;

export const Header = styled.h2`
    font-size:16px;
    line-height:0.5; 
`;

export const SubHeader = styled.h3`
    margin-top:5px;
     line-height:0.2;
    font-size:12px;
    font-weight:normal;
    color:#707070
`;

export const Tag = styled.div`
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#FFFFFF;
    padding:0 10px;
    margin-top:10px;
    .MuiSvgIcon-root{
        cursor:pointer;
    }
`;

export const Gallery = styled.div`
    display:grid;
    grid-template-columns:auto auto auto;
    padding:10px;
`;

export const Item = styled.div`
    img{
        width:60px;
        height:60px;
    }
`;

export const FileGroup = styled.div`
    display:flex;
    width:70%;
    text-align:start;
    margin:auto;
    align-items:center;
    margin-bottom:10px;
    padding:10px;
    
    .MuiSvgIcon-root{
        margin-right:10px;
        color:#45CC46;
        border-radius:10px;
        background-color:#E4FDEF;
        padding:10px;
    }
`;

export const FileText = styled.h2`
    font-size:14px;
`;

export const Content = styled.div`
     margin:auto;
    margin-top:3px;
    padding:10px;
   background-color:#FFFFFF;
   display:${({toggle}) => (toggle === true? 'block':'none')};
   animation: slidetoggle 1s;
  
   @keyframes slidetoggle{
       0%{
           opacity:0;
       }
       25%{
           opacity:25%;
       }
       50%{
           opacity:50%;
       }
       75%{
           opacity:75%;
       }
       100%{opacity:100%;}
   }
`;

export const Info = styled.p`
     text-align:center;
     font-style:italic;
     padding:15px;
`;

export const PinGroup = styled.div`
    display:flex;
    align-items:center;
    margin:auto;
    .MuiSvgIcon-root{
       color:#E6E610;
        margin-right:20px;
    }


`;

export const PinText = styled.p`
    margin:auto;
    font-size:10px;
    font-style:italic;
    text-align:center;
    padding:10px;
    color:#7E7575;
`;

export const PinHeader = styled.h2`
    font-size:12px;
    font-style:italic;
    font-weight:bold;
`;