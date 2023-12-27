import React from "react"

import AboutText from "../../components/AboutText"
import Title from "../../components/Title"

import { Container, ContainerItens } from "./styles"

export default function Who() {
  const objects = [
    {
      label: "Nutricionista Clínico Esportivo formado pela UNIFACS"
    },

    {
      label: "Palestrante, já palestrou para mais de 1000 pessoas"
    },
    {
      label: "Pós graduando em emagrecimento e Metabolismo pela UNIGUAÇU"
    },
    {
      label:
        "Graduando do 7° semestre do curso de Educação Física pela Universidade Cruzeiro do Sul"
    },
    {
      label:
        "Apaixonado pela prática de esportes: principalmente musculação, crossfit, corrida e bicicleta"
    },
    {
      label:
        "Ex obeso e encontrou na alimentação saudável e nos exercícios físicos um propósito de vida, e quer ajudar você a ter resultados sem precisar passar por privações excessivas e passar fome."
    }
  ]

  return (
    <Container>
      <Title label="QUEM SOU" span="EU ?" />
      <ContainerItens>
        {objects.map((obj, index) => (
          <AboutText key={index} label={obj.label} />
        ))}
      </ContainerItens>
    </Container>
  )
}
