import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  align-items: center;

  h1 {
    color: #ffffff;
    margin-top: 20px;
  }
`

export const PhotoEnd = styled.div`
  img {
    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
  }
`
