const botones=document.getElementById('btn_cambios');
cargarEventos();

function cargarEventos(){
botones.addEventListener('click',iniciar);
}
function iniciar(e){
    e.preventDefault();
    console.log("entro")
    var nombre=document.getElementById('nombre').value;
    var apellido=document.getElementById('apellido').value;
    var contra=document.getElementById('contra').value;
    if(nombre=="" || apellido=="" || contra==""){
        alert("Llenar todos los campos");
    }else if(contra<9){
        alert("La contraseña debe tener al menos 8 caracteres")
    }
}    