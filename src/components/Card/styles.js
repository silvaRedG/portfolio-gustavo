import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: -webkit-center;
  width: auto;
`

export const ContainerNumber = styled.div`
  font-family: "Montserrat", sans-serif;
  background: ${props =>
    props.isColorNumber
      ? "#000000"
      : "linear-gradient(14deg, rgba(26, 44, 144, 1) 30%, rgba(48, 93, 208, 1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem;
`

export const ContainerText = styled.div`
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  font-size: 0.9rem;
`
