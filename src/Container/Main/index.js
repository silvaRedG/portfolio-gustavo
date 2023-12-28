import React from "react"

import Logo from "../../assets/Logo---Preto-3.png"
import PhotoRight from "../../assets/photo-lateral.png"
import { Container, SubPhoto } from "./styles"

function Main() {
  return (
    <Container>
      <img src={Logo} alt="logo-page" />

      <SubPhoto>
        <img src={PhotoRight} alt="photo-lateral" />
      </SubPhoto>
    </Container>
  )
}

export default Main
