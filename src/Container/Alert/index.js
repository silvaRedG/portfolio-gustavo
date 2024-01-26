/* eslint-disable */

import React from "react"

import { Container, Phone , Phoneimg } from "./styles"
import CardGroup from "../../components/Alert_card"

export default function Alert() {

    return (

        <Container>
            <CardGroup />
            <Phone>

                <h1>
                    ALÉM DA CONSULTA
                </h1>

                <p>
                    Todos os meus pacientes ganham acesso a uma plataforma online com aulas em  formato de áudio, vídeo e texto, com  materiais educativos dentro dos seus  assuntos de interesse.
                </p>

            </Phone>

            <Phoneimg>
                
            </Phoneimg>
        </Container>

    )
}