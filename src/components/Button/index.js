import React from "react"

import { Container, ContainerButton } from "./styles"

function Button({ children, ...props }) {
  return (
    <Container>
      <ContainerButton {...props}>{children}</ContainerButton>
    </Container>
  )
}

export default Button
