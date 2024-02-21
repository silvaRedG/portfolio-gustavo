/* eslint-disable */
import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 40px;
    
  height: 100vh;


 
`

export const ContainerItens = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    

`


export const CardBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    background-color: #0057dc;
    border-radius: 20px;
    text-align: center;
    min-height: 35vh;
    width: 30vw;



h5{
    
    color: #ffffff;
    font-weight: bolder;
    font-size: 35px;
    border-bottom: #000 2px solid;
}

p{
    color: #ffffff;
    font-weight: bolder;
    font-size: 20px;
}

`

export const CardBodySecond = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #dbdbdb;

p{  
    
    color: #000;
    text-align: center;
}

width: 30vw;

`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    width: 10vw;
    min-height: 10vh;
    font-weight: bolder;
    font-size: 50px;
    background-color: #f26400;

`

export const ItensSecond = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: relative;
left: 35%;


`

export const CardBottom = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #0057dc;
    border-radius: 20px;
    height: 35vh;
    width: 30vw;


.card-title{
    color: #ffffff;
    font-size: 30px;

}

.card-text{
    font-size: 20px;
    text-align: center;
}


`