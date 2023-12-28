import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  button {
    font-size: 2em;
    cursor: pointer;
    background-color: #0d0d0d;
    color: #ffffff;

    margin-bottom: 30px;
    border: inset 2px rgb(198, 198, 241);

    width: 40vw;
    height: 20vh;
    transition: opacity 0.5s ease-in-out;
    padding: 50px;

    border-radius: 5rem;

    &:hover {
      opacity: 0.5;
    }
  }
`
