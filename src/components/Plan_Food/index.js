/* eslint-disable */
import React from 'react';
import { Container, ContainerItens, CardBody, CardBodySecond, Icon, CardBottom, ItensSecond} from "./styles"



const CardGroup = () => {
    return (

        <Container>
        <ContainerItens>
                <CardBody>
                    <h5 className="card-title">1.</h5>
                    <p className="card-text">Objetivos Saudáveis</p>
                    <CardBodySecond>
                        <p className="card-text"><small className="text-body-secondary">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small></p>
                    </CardBodySecond>
                </CardBody>
            </ContainerItens>

            <ContainerItens>

                <CardBody>
                    <h5 className="card-title">2.</h5>
                    <p className="card-text">Resultado Desejado</p>
                    <CardBodySecond>
                    <p className="card-text"><small className="text-body-secondary">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small></p>
                    </CardBodySecond>
                    
                </CardBody>
            </ContainerItens>

            <ContainerItens>
                <CardBody>
                    <h5 className="card-title">3.</h5>
                    <p className="card-text">Praticidade na rotina</p>
                    <CardBodySecond>
                    <p className="card-text"><small className="text-body-secondary">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </small></p>

                    </CardBodySecond>
                </CardBody>
            </ContainerItens>

        </Container>
    );
};

export default CardGroup;
