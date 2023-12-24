import React from "react"

import Card from "../../components/Card"
import Title from "../../components/Title"
import { Container, ContainerItens } from "./styles"

export default function InPersonService() {
  const objects = [
    {
      id: "01",
      label:
        "Utilizando plataformas online de sua preferência, como o Whatsapp ou o Meet, vamos agendar uma reunião exclusiva."
    },
    {
      id: "02",
      label:
        "Durante essa reunião personalizada, vou mergulhar profundamente em seus hábitos alimentares e rotina diária."
    },
    {
      id: "03",
      label:
        "Com base nas informações coletadas, iremos desenvolver um plano alimentar sob medida para você."
    },
    {
      id: "04",
      label:
        "Nossa consulta vai além do fornecimento do plano alimentar. Você saíra com todas as ferramentas necessárias para alcançar seus objetivos."
    },
    {
      id: "05",
      label:
        "Além dos alimentos recomendados, também fornecerei substitutos adequados, metas claras e, se necessário, suplementos específicos."
    },
    {
      id: "06",
      label:
        "Realizaremos checks-ins semanais para ajustar estratégias conforme necessário, garantindo assim seu progresso contínuo e otimizando seus resultados."
    }
  ]

  return (
    <Container>
      <Title label="COMO FUNCIONA O MEU" span="ATENDIMENTO ON-LINE?" />
      <ContainerItens>
        {objects.map((obj, index) => (
          <Card key={index} number={obj.id} label={obj.label} />
        ))}
      </ContainerItens>
    </Container>
  )
}
