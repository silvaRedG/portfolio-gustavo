import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  h1 {
    text-align: center;
    color: #ffffff;
    margin-top: 20px;
    border: solid 1px red;
  }
`

export const PhotoEnd = styled.div`
  img {
    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
  }
`
