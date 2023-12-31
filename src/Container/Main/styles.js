import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10em;

  padding: 20px 5px 0px 10px;

  img {
    width: 50vw;
    -webkit-mask-image: linear-gradient(to top, transparent 7%, black 30%);
  }
`

export const SubPhoto = styled.div`
  position: relative;
  left: 5%;

  img {
    width: 30vw;
  }
`
