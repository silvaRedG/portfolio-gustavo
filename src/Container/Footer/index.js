import React from "react"
import Button from "../../components/Button/index"
import { Container, PhotoEnd } from "./styles"
import Photo from "../../assets/foto4.png"

function Footer() {
  return (
    <Container>
      <Button />

      <PhotoEnd>
        <img src={Photo} alt="photo-footer" />
      </PhotoEnd>
    </Container>
  )
}

export default Footer
