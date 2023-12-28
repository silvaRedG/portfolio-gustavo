import React from "react"
import { Container, ContainerItens } from "./styles"
import Card from "../../components/Card"

function Plan() {
  const objects = [
    {
      text: "Um plano de dieta que respeite:",
      text2: "E acima de tudo, oferecendo um acolhimento que você merece!"
    },

    {
      textList1: "Suas preferências alimentares",
      textList2: "Correria do seu dia-a-dia",
      textList3: "Seu orçamento para investir em uma possível suplementação"
    }
  ]
  return (
    <Container>
      <h1></h1>
      <ContainerItens>
        <ul>
          {["textList1", "textList2", "textList3"].map((textList, index) => (
            <li key={index}>
              {objects.map((obj, index) => (
                <Card key={index} label={obj[textList]} />
              ))}
            </li>
          ))}
        </ul>
      </ContainerItens>

      <h2></h2>
    </Container>
  )
}

export default Plan
