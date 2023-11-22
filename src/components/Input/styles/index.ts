import styled from "styled-components";



export const InputStyle = styled.input`
  width: 100%;
  height: 48px;
  min-width: 300px;
  border: 1px solid var(--border-inputs);
  background-color: var(--background-inputs);
  border-radius: 5px;
  font-size: 16px;
  margin-top: 24px;
  padding: 12px 20px;
  outline: none;
  &:focus {
    border: 0;
  }
  &.error{
    border: 1px solid black;
  }
  @media (max-width: 500px) {
    min-width: 100%;

    }
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: start;
    justify-content: center;
    position: relative;
    img {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px 20px;
    }
  }
`;
export const ErrorMsg = styled.span`
  color: var(---secondary-font-color);
  font-size: 14px ;
  font-weight: 400 !important;
  align-self: center;
  margin-top: 5px;
  position: absolute;
  bottom: -20px
`;
