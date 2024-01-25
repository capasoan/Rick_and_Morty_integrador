function validar ({email, password}){
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  const error = [];
  const regexNumber= /\d/;

//------------------------------------------------------
  if (!emailRegex.test(email)) {
    error.email="El nombre de usuario debe ser una dirección de correo electrónico válida."
  }if(!email){
    error.email= "El nombre de usuario no puede estar vacio"
}if (email.length > 35) {
    error.email= "El nombre de usuario no puede tener más de 35 caracteres."
  }

  //-------------------------------------
  if(!regexNumber.test(password)){
    error.password="la contraseña tiene que tener al menos un número"
  } if(password.length < 6 || password.length > 10){
    error.password= "la contraseña tiene que tener una longitud entre 6 y 10 caracteres"
  }
return error;
}

export default validar;