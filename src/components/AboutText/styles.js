import styled from "styled-components"

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(4, 126, 241, 1) 25%,
    rgba(0, 87, 220, 1) 76%
  );
  margin-top: 25px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const ContainerText = styled.div`
  color: #ffffff;
  padding: 5px 10px;
  font-size: 0.9rem;
  transform: skew(5deg);

  width: 50vw;
  @media screen and (max-width: 900px) {
    transform: skewX(0deg);
    width: 100%;
  }
`
