import Form from "./Form";
export function validateForm (userData, errors) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.email){
      errors.email = "Debe ingresar un correo electrónico"
    }
    else if (!emailRegex.test(userData.email)) {
      errors.email = "Debe ingresar un correo electrónico valido"
    }
    else if (userData.email.length > 35){
      errors.email = "El correo electrónico no puede contener mas de 35 caracteres"
    }
    else{
        delete errors.email
    }

    const passwordRegex = /\d/

    if (!userData.password){
        errors.password = "Debe ingresar una contraseña"
      }
      else if (!passwordRegex.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un numero"
      }
      else if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
      }
      else{
          delete errors.password
    }
}