const botones=document.getElementById('boton');
cargarEventos();

function cargarEventos(){
botones.addEventListener('click',iniciar);
}
function iniciar(e){
    var nombre=document.getElementById('nombre').value;
    var correo=document.getElementById('correo').value;
    var telefono=document.getElementById('telefono').value;
    var mensaje=document.getElementById('mensaje').value;
    if(nombre=="" || correo=="" || telefono=="" || mensaje==""){
        alert("Son obligatorios todos los campos");
        e.preventDefault();
        return false;
    }else if (!validar_email(correo)){
        alert("Revise el correo Ingresado");
        e.preventDefault();
        return false;
    }else if(isNaN(telefono)){
        alert("El teléfono no es un número");
        e.preventDefault();
        return false;
    }else{
        alert("Mensaje enviado");
    }
}    
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}