import React from "react"

import { ContainerTitle } from "./styles"

export default function Title({ label, span, isActive }) {
  return (
    <ContainerTitle isActive={isActive}>
      {label}
      <span>{span}</span>
    </ContainerTitle>
  )
}
