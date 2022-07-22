import React from "react";
import styled from "styled-components";
import lixeira from "./image/excluir-grande.png";



const CriaCard = styled.div `

button{
    top: 497px;
left: 550px;
width: 165px;
height: 48px;
/* UI Properties */
background: var(---cor-erro) 0% 0% no-repeat padding-box;
background: #DB2525 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #92207242;
border-radius: 8px;
opacity: 1;
}

a{
    top: 509px;
left: 772px;
width: 76px;
height: 23px;
/* UI Properties */
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---cor-erro);
text-align: left;
font: normal normal bold 18px/23px Muli;
letter-spacing: 0px;
color: #DB2525;
opacity: 1;
}

`

export const CardEdit = () => {

   




    return (

    <CriaCard>  
    <img src={lixeira}></img>
     <button>Excluir</button>
     <a href="">cancelar</a>
        </CriaCard>
    
    )
}
