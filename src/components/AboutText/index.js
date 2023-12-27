import React from "react"

import { Container, ContainerText } from "./styles"

export default function AboutText({ label }) {
  return (
    <Container>
      <ContainerText>{label}</ContainerText>
    </Container>
  )
}
