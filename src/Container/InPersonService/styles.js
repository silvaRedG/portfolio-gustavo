import styled from "styled-components"

export const Container = styled.div`
  background-color: #0067e4;
  border-radius: 5rem;
  padding: 1rem;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 10px;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 500px);
    grid-gap: 30px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`
