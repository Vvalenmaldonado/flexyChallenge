import styled from "styled-components";

export const InputFileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 24px;
   label{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
     .checked{
      width: 30px !important;
     }
    img {
    width: 45px !important;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
  }

   }
 
`;

export const FileInputHidden = styled.input.attrs({ type: "file" })`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FileInputLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  color: var(--primary-font-color) !important;
 
`;
