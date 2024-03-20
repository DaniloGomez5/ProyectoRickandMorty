<<<<<<< HEAD
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
=======
export default function validation (inputs){
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexpassword =  /^(?=\w*\d)\S{6,10}$/;
  const regexnumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i

  if(!regexEmail.test(inputs.email)){
      errors.email = 'Debe ser correo electronico'
  }
  if(!inputs.email){
      errors.email = 'No puede ser vacio'
  }
  if(inputs.email.length > 35){
      errors.email = 'Debe tener menos de 35 caracteres'
  }
  if(!regexnumber.test(inputs.password)){
      errors.password = "La contrasena debe tener un numero"
  }
  if(!regexpassword.test(inputs.password)){
      errors.password = "Debe tener entre 6 y 10 caracteres"
  }

  return errors;

>>>>>>> fc5ea8da16a22fbd40800ca31572d042e7e1e393
}