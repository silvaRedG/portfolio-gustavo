import React from "react"

import Photo from "../../assets/foto4.png"
import Button from "../../components/Button/index"
import { Container, PhotoEnd } from "./styles"

function Footer() {
  return (
    <Container>
      <Button />

      <PhotoEnd>
        <h1>AGENDE JÁ! SUA CONSULTA</h1>
        <img src={Photo} alt="photo-footer" />
      </PhotoEnd>
    </Container>
  )
}

export default Footer
