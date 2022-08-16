const usuario = document.querySelector("#usuario");
const contrasenia = document.querySelector("#contrasenia");
const formularioIniciar = document.querySelector ("#form-iniciar");
const ingresar = document.querySelector ("#submitIngresar");
const registrarse = document.querySelector ("#submitRegistrarse");
const newRegister = document.querySelector ("#registrarse");
const formularioRegistrarse = document.querySelector( "#form-registrarse");
const nombreYApellido = document.querySelector( "#nombreYApellido");
const emailRegistro= document.querySelector( "#inputEmail");
const usuarioRegistro = document.querySelector( "#inputUsuario");
const contraRegistro = document.querySelector("#inputContrasenia");
const inputRegistrarse = document.querySelector("#inputRegistrarse")








let usuarios = JSON.parse(localStorage.getItem("usuarios")) ||[{
    user: "azu.sanchez",
    contra: "miajazmin"
}]


console.log(usuarios)

function usuarioIngresado () {
    let usuarioIngresado = usuarios.find(userU => userU.user === usuario.value)

    if (usuarioIngresado == undefined) {
        Swal.fire (
            'No hay coinicidencia de Usuarios',
            'Registrese',
            
        )
    } else if (usuarioIngresado.contra !== contrasenia.value) {
        Swal.fire (
            'Contraseña incorrecta',
            'error',
        )
    } else {
        window.location.href = "turnos.html"
    }
}
console.log (usuarioIngresado)

formularioIniciar.onsubmit = (e) =>{
    e.preventDefault(),
    usuarioIngresado()
}



class Clientes {
    constructor(nombreyApellido,email , usuario, contrasenia) {
        this.nombreyApellido= nombreyApellido,
        this.email = email,
        this.usuario= usuario,
        this.contrasenia= contrasenia
    }
}
let nuevoRegistroDeUsuario = () =>{
    const usuariosNuevos = new Clientes(nombreYApellido.value, emailRegistro.value, usuarioRegistro.value, contraRegistro.value)
    usuarios.push(usuariosNuevos)

}

registrarse.onsubmit = (e) =>{
    e.preventDefault()
    registrarseId.style.display = "flex"
    console.log (registrarse)
    
    formularioRegistrarse.onsubmit = (e) => {
        e.preventDefault()
    }

}




