import { IRegister } from "../../features/Register/models";

export const validate = (values: IRegister) => {
  const errors: IRegister = {
    fullname: "",
    phone: "",
    email: "",
    password: "",
  };

  if (!values.fullname) {
    errors.fullname = "Nombre completo requerido";
  }
  if (!values.phone) {
    errors.phone = "Número de teléfono requerido";
  } else if (!/^\+?\d{1,}$/i.test(values.phone)) {
    errors.phone = "Número de teléfono inválido";
  }

  if (!values.email) {
    errors.email = "Dirección de email requerida";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Dirección de email inválida";
  }
  if (!values.password) {
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 8) {
    errors.password = "Debe tener al menos 8 caracteres";
  }
  return errors;
};
