import React from "react"

import { Container, ContainerNumber, ContainerText } from "./styles"

export default function Card({ number, label, isColorNumber }) {
  return (
    <Container>
      <ContainerNumber isColorNumber={isColorNumber}>{number}</ContainerNumber>
      <ContainerText>{label}</ContainerText>
    </Container>
  )
}
