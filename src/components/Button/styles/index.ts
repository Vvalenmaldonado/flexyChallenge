import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${(props) =>
    props.disabled ? "grey" : "var(--primary-color)"};
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 24px;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
`;
