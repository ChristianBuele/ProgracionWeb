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
    var id=document.getElementById('idUser').value
    if(nombre=="" || apellido=="" || contra==""){
        alert("Llenar todos los campos");
    }else if(contra<9){
        alert("La contraseña debe tener al menos 8 caracteres")
    }else{
        enviar(nombre,apellido,contra,id);
    }
}  
function enviar(nombre,apellido,contra,id){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({ "id_usuario": id, "nombre_usuario": nombre,"apellido_usuario":apellido,"contrasenia_usuario":contra});
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
fetch("https://servidorinfinity.herokuapp.com/api/producto/updateUser/", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));
}

