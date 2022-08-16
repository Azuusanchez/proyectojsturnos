const usuario = document.querySelector("#usuario");
const contrasenia = document.querySelector("#contrasenia");
const formularioIniciar = document.querySelector ("#form-iniciar");
const ingresar = document.querySelector ("#submitIngresar");
const registrarse = document.querySelector ("#submitRegistrarse");


let usuarios =[{
    user: "azu.sanchez",
    contra: "miajazmin"
}]


console.log(usuarios)

function usuarioIngresado () {
    let usuarioIngresado = usuarios.find(userU => userU.user === usuario.value)

    if (usuarioIngresado == undefined) {
        Swal.fire(
            'No hay coinicidencia de Usuarios',
            'Registrese',
            
        )
    } else if (usuarioIngresado.contra !== contrasenia.value) {
        Swal.fire(
            'Contraseña incorrecta',
            'error',
        )
    } else {
        window.location.href = "turnos.html"
    }
}

ingresar.onsubmit = (e) =>{
    e.preventDefault(),
    usuarioIngresado()
}

