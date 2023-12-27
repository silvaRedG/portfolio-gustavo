import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  background-color: #0057dc;
  margin-top: 25px;
`

export const ContainerText = styled.div`
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  :nth-child(2) {
    right: 5px;
  }
  :nth-child(3) {
    right: 15px;
  }
  :nth-child(4) {
    right: 20px;
  }
  :nth-child(5) {
    right: 30px;
  }
  :nth-child(6) {
    right: 40px;
  }
  :nth-child(7) {
    right: 50px;
  }

  width: 50vw;
  position: relative;
`
