import React from "react"

import Photo from "../../assets/foto4.png"
import Button from "../../components/Button/index"
import { Container, ContainerTitle, ContainerLeft, PhotoEnd } from "./styles"
import Title from "../../components/Title"

function Footer() {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>AGENDE JÁ SUA CONSULTA!</ContainerTitle>
        <Button href="https://api.whatsapp.com/send?phone=5571997147373&text=Ol%C3%A1,%20Nutri!%0AQuero%20saber%20mais%20sobre%20os%20planos.%20Ainda%20possuo%20d%C3%BAvidas.">
          INICIE SUA EVOLUÇÃO AINDA HOJE
        </Button>
      </ContainerLeft>
      <PhotoEnd>
        <img src={Photo} alt="photo-footer" />
      </PhotoEnd>
    </Container>
  )
}

export default Footer
