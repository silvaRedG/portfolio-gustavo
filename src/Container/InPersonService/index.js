import React from "react"

import Card from "../../components/Card"
import Title from "../../components/Title"
import { Container, ContainerItens } from "./styles"

export default function OnlineService() {
  const objects = [
    {
      id: "01",
      label:
        "Ao nos encontrarmos pessoalmente em nosso local de atendimento, criaremos um ambiente propício para transformar sua saúde e alcançar seus objetivos."
    },
    {
      id: "02",
      label:
        "Durante nossa consulta, irei mergulhar fundo em seus hábitos alimentares e compreender minuciosamente sua rotina diária. Essa investigação minuciosa nos permitirá desvendar as melhores estratégias para você obter resultados duradouros."
    },
    {
      id: "03",
      label:
        "Nossa consulta vai além do fornecimento do plano alimentar. Você saíra com todas as ferramentas necessárias para alcançar seus objetivos."
    },
    {
      id: "04",
      label:
        "Ao final da consulta, você sairá com tudo o que precisa para começar sua jornada rumo ao bem-estar. Isso inclui uma lista completa de alimentos recomendados, opções de substitutos inteligentes, metas claras e, se necessário, sugestões de suplementos específicos para maximizar seus resultados."
    },

    {
      id: "05",
      label:
        "Realizaremos checks-ins semanais para ajustar estratégias conforme necessário."
    }
  ]

  return (
    <Container>
      <Title
        label="COMO FUNCIONA O MEU"
        span="ATENDIMENTO PRESENCIAL"
        isActive={true}
      />
      <ContainerItens>
        {objects.map((obj, index) => (
          <Card
            key={index}
            number={obj.id}
            label={obj.label}
            isColorNumber={true}
          />
        ))}
      </ContainerItens>
    </Container>
  )
}
