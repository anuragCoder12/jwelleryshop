import styled from 'styled-components'

export const Container=styled.div`
width: ${(props)=>props.cw};
display:flex;
flex-direction: ${(props)=>props.cfd};
justify-content: ${(props)=>props.cjc};
gap: ${(props)=>props.cgp};
align-items: ${(props)=>props.cai};
margin-right: ${(props)=>props.cmr};
margin-top: ${(props)=>props.cmt};
margin-bottom: ${(props)=>props.cmb};
height: ${(props)=>props.ch};
border: ${(props)=>props.cb};
margin-left: ${(props)=>props.cml};
background-color: ${(props)=>props.cbgc};
@media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    width: 100%;
    gap: 0;
    

}
`