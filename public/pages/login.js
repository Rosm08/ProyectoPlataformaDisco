let inputEmail  = document.getElementById("emailUsuario")
let password = document.getElementById("contraseñaUsuario")
let alertextEmail = document.querySelector("h5")
let alertextPassword = document.querySelector("h4")
let validarEmail =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

inputEmail.addEventListener("keyup",()=>{
if(!validarEmail.test(inputEmail.value)){
   alertextEmail.innerHTML = "Formato de correo incorrecto"
   alertextEmail.classList.add("error_text-password")
   inputEmail.classList.add("error_password")
}else{
   alertextEmail.innerHTML=""
   alertextEmail.classList.remove("error_text-password")
   inputEmail.classList.remove("error_password")
}
})

password.addEventListener("keyup",()=>{
   if(password.value.length<6){
      alertextPassword.innerHTML = "su contraseña es demasiado corta"
      alertextPassword.classList.add("error_text-password")
      password.classList.add("error_password")
   }else{
      alertextPassword.innerHTML= ""
      alertextPassword.classList.remove("error_text-password")
      password.classList.remove("error_password")
   }
})

function validar() {
   if(inputEmail.value == "" ||  password.value === ""){
    swal("failed","deben completarse todos los campos","error")
   }
}