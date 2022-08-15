const usuario = document.querySelector("#usuario");
const contrasenia = document.querySelector("#contrasenia");
const formularioIniciar = document.querySelector ("#form-iniciar");
const ingresar = document.querySelector ("#submitIngresar");
const registrarse = document.querySelector ("#submitRegistrarse");


let usuarios ={
    user: "azu.sanchez",
    contra: "miajazmin"
}
console.log(usuarios)

function formularioIngresar () {
    let usuarioIngresado = usuarios.find(userU => userU.user === usuario.value)

    if (usuarioIngresado == undefined) {
        swal.fire(
            'No hay coinicidencia de Usuarios',
            'Registrese',
            
        )
    } else if (usuarioIngresado.contra !== contra.value) {
        swal.fire(
            'Contraseña incorrecta',
            'error',
        )
    } else {
        window.location.href = "turnos.html"
    }
}
console.log (formularioIngresar)


