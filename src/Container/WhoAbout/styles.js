/* eslint-disable prettier/prettier */
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin: 5rem;
`

export const ContainerItens = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px 25px 5px 15px;

  align-items: center;
  justify-content: flex-end;

  gap: 5px;
  margin-right: 5%;

  transform: skewX(-5deg);
`

export const Photo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    position: relative;
    right: 10%;
    width: 20vw;
    border: solid 1px green;

    transform: scaleX(-1);
    z-index: 1;
    object-fit: cover;

    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
  }
`
