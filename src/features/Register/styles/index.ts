import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  min-width: 1300px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  overflow-y: hidden;
  @media (max-width: 800px) {
    flex-direction: column; // Cambia a layout vertical en pantallas pequeñas
    align-items: center;
    min-width: 100%;
  }
  div {
    @media (max-width: 800px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-bottom: 10px;
  }
  span {
    color: var(--secondary-font-color);
    font-weight: 500;
    font-size: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 350px;
    max-width: 400px;
    @media (max-width: 800px) {
      min-width: 100%;
    }

    span {
      font-size: 14px;
      a {
        color: var(--primary-font-color);
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
      }
    }
  }
`;
export const FormWrapper = styled.div`
  width: 40%;
  min-width: 350px;
  max-width: 400px;
  margin: 6rem 8rem 6rem 3rem;
  height: 100%;
  @media (max-width: 800px) {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    margin: 3rem 0rem;
    padding: 0 20px;
  }
`;
export const ImageBackground = styled.div`
  width: 50%;
  height: auto !important;
  min-height: 100%;
  height: 100%;
  background-image: url("/images/aside.jpg");
  background-size: cover; /* Asegura que la imagen cubra todo el espacio */
  background-position: 0% 0%; /* Centra la imagen */
`;
