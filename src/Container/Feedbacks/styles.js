import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  height: 60vh;
`

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;

  .rec.rec-arrow {
    background-color: #fff;
    color: #0067e4;
  }

  .rec.rec-arrow:hover {
    background-color: #0067e4;
    color: #fff;
  }

  .rec.rec-dot {
    box-shadow: 0 0 1px 3px #0067e4;
  }
`

export const Item = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (min-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`
