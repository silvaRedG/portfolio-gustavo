import React from "react"

import { Container, ContainerNumber } from "./styles"

export default function Card() {
  const objects = [
    {
      id: 1,
      text: "Utilizando plataformas online de sua preferência, como o Whatsapp ou o Meet, vamos agendar uma reunião exclusiva."
    },
    {
      id: 2,
      text: "Durante essa reunião personalizada, vou mergulhar profundamente em seus hábitos alimentares e rotina diária."
    },
    {
      id: 3,
      text: "Com base nas informações coletadas, iremos desenvolver um plano alimentar sob medida para você."
    },
    {
      id: 4,
      text: "Nossa consulta vai além do fornecimento do plano alimentar. Você saíra com todas as ferramentas necessárias para alcançar seus objetivos."
    },
    {
      id: 5,
      text: "Além dos alimentos recomendados, também fornecerei substitutos adequados, metas claras e, se necessário, suplementos específicos."
    }
  ]
  return (
    <Container>
      {objects.map((t, index) => (
        <div key={index}>
          <ContainerNumber>{t.id}</ContainerNumber>
          <div>{t.text}</div>
        </div>
      ))}
    </Container>
  )
}
