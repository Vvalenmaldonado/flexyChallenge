import Button from "../../components/Button";
import Input from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { RegisterWrapper, FormWrapper, ImageBackground } from "./styles";
import { useState } from "react";
import { IRegister } from "./models";
import { validate } from "../../utils/FormValidate";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../redux/registerSlice";
import Nav from "../../components/Nav";

export const initialValues: IRegister = {
  fullname: "",
  email: "",
  password: "",
  phone: "",
};

const Register = () => {
  const [formValues, setFormValues] = useState<IRegister>(initialValues);
  const [formErrors, setFormErrors] = useState<IRegister>(initialValues);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: IRegister = validate(formValues);
    setFormErrors(errors);
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      dispatch(updateFormData(formValues));
      setIsSubmittedSuccessfully(true);
    }
  };

  return (
    <RegisterWrapper>
      <div className="leftWrapper">
        <Nav />
        <FormWrapper>
          <h1>¡Bienvenido!</h1>
          <span>Convertite ahora en un agente Flexy.</span>
          <form onSubmit={handleSubmit}>
            <InputFile label="Subí tu foto de perfil" />
            <Input
              placeholder="Nombre y Apellido"
              type="text"
              name="fullname"
              onChange={handleInputChange}
              errorMesagge={formErrors.fullname}
              data-testid="register-input"
            />
            <Input
              placeholder="+54 01 0200 000"
              type="text"
              name="phone"
              onChange={handleInputChange}
              errorMesagge={formErrors.phone}
              data-testid="phone-input"
            />
            <Input
              placeholder="hola@tuemail.com"
              type="email"
              name="email"
              onChange={handleInputChange}
              errorMesagge={formErrors.email}
              data-testid="email-input"
            />
            <Input
              placeholder="Ingresá tu contraseña"
              type="password"
              name="password"
              onChange={handleInputChange}
              errorMesagge={formErrors.password}
              data-testid="register-input"
            />

            <Button
              type="submit"
              disabled={isSubmittedSuccessfully}
              data-testid="button"
            >
              {isSubmittedSuccessfully ? "Registrado" : "Registrate"}
            </Button>
            <span>
              ¿Ya tenés una cuenta? <a href="/">Iniciá sesión</a>
            </span>
          </form>
        </FormWrapper>
      </div>
      <ImageBackground></ImageBackground>
    </RegisterWrapper>
  );
};
export default Register;
