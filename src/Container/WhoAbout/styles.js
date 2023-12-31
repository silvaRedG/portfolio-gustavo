import styled from "styled-components"

export const Container = styled.div`
  padding: 50px 0;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform: skewX(-5deg);

  @media screen and (max-width: 900px) {
    align-items: center;
    transform: skewX(0deg);
    width: 100%;
  }
`

export const Photo = styled.div`
  img {
    position: relative;
    width: 400px;
    /* right: 10%;
    width: 20vw; */
    /* border: solid 1px green; */

    transform: scaleX(-1);
    /* z-index: 1; */
    object-fit: cover;

    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 20%);
  }
`
