import { FileInputHidden, FileInputLabel, InputFileWrapper } from "./styles";
import { useState } from "react";

interface IInputFileProps {
  label: string;
}

export const InputFile = ({ label }: IInputFileProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };
  return (
    <InputFileWrapper>
      <FileInputHidden id="file" accept="image/*" onChange={handleFileChange} data-testid='fileInput' />
      <label htmlFor="file"> 
        <img src="/images/fileInput.svg" alt="upload" />
        <FileInputLabel>{label}</FileInputLabel>
        {file && <img className="checked" src="/images/checked.svg" alt="Icono de archivo subido" data-testid='checkedIcon'/>}
      </label>
    </InputFileWrapper>
  );
};