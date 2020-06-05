const botones=document.getElementById('boton');
cargarEventos();

function cargarEventos(){
botones.addEventListener('click',iniciar);
}
function iniciar(e){
    e.preventDefault();
    var nombre=document.getElementById('nombre').value;
    var correo=document.getElementById('correo').value;
    var telefono=document.getElementById('telefono').value;
    var mensaje=document.getElementById('mensaje').value;
    if(nombre=="" || correo=="" || telefono=="" || mensaje==""){
        alert("Son obligatorios todos los campos");
        return false;
    }else if (!validar_email(correo)){
        alert("Revise el correo Ingresado");
        return false;
    }else if(isNaN(telefono)){
        alert("El teléfono no es un número");
        return false;
    }else{
        alert("Mensaje enviado");
    }
}    
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}