import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  max-width: 1700px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  overflow-y: hidden;
  @media (max-width: 900px) {
    flex-direction: column; 
    align-items: center;
    justify-content: start;
    min-width: 100%;
  }
  .leftWrapper {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 900px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
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
    min-width: 320px;
    max-width: 400px;
    @media (max-width: 900px) {
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
  width: 100%;
  max-width: 480px;
  margin-top: 5rem;
  height: 100%;
  padding: 0 20px;

  .password {
    display: none;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    margin: 62px 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .password {
      display: block;
      color: var(--primary-color);
      text-decoration: none;
      font-size: 14px;
      margin-top: 14px;
    }
  }
 
`;
export const ImageBackground = styled.div`
  width: 60%;
  height: auto !important;
  min-height: 100%;
  height: 100%;
  background-image: url("/images/aside.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
