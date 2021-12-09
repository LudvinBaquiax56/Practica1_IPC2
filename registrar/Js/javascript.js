function registrar() {
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("correo").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password == confirmPassword) {
    console.log("Nombre:" + nombre);
    console.log("Correo:" + mail);
    console.log("Contraseña:" + password);
    console.log("Confirmación de la Contraseña:" + confirmPassword);
    error.style.display = "none";
  } else {
    let mensaje = "Las contraseñas no coinciden";
    console.log(mensaje);
    alert(mensaje);
    errorPassword(mensaje);
  }
}

let errorPassword = (mensaje) => {
  const error = document.getElementById("error");
  error.style.display = "block";
  error.innerHTML = `  ${mensaje}`;
};
