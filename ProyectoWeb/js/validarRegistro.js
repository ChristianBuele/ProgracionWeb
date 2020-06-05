const botones=document.getElementById('btn_registro');
cargarEventos();

function cargarEventos(){
botones.addEventListener('click',iniciar);
}

function iniciar(e){
    e.preventDefault();
    var contra=document.getElementById('contra').value;
    var email=document.getElementById('email').value;
    var apellido=document.getElementById('apellido').value;
    var nombre=document.getElementById('nombre').value;
    var condi=document.getElementById('condi').checked;
    if(contra=="" || email=="" || apellido=="" || nombre==""){
        alert("Todos los campos son obligatorios");
        return false;
    }else if(!condi){
        alert("Porfavor acepte terminos y condiciones");
        return false;
    }else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false; 
    }else if(contra.length<8){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }else if(!validar_email(email)){
        alert("Revise el correo Ingresado porfavor");
        return false;
    }else{
        alert("Todos los valores son correctos")
    }
}
function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}