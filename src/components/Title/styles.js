import styled from "styled-components"

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => (props.isActive ? "#000000" : "#ffffff")};
  font-family: "Roswell Four ITC Std";
  font-size: 4rem;
  text-transform: uppercase;

  span {
    font-family: "Roswell Four ITC Std";
    font-size: 6rem;
    color: ${props => (props.isActive ? "#ffffff" : "#0057dc")};
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 424px) {
    font-size: 2.5rem;

    span {
      font-size: 3rem;
    }
  }
`
