import styled from 'styled-components/macro'

export const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`

export const Group = styled.div`
    display:flex;
    flex-direction:column;    
    .MuiSvgIcon-root {
    height: 1.5em !important;
    width: 1.5em !important;
    color: #888787;
    padding: 10px 0;
    }
`

export const Logo = styled.div`
    img{
        margin-top:50px;
        width:100px;
        height:100px;
    }
   
`

