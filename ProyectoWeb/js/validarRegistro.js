const botones=document.getElementById('lista_botones_registro');
cargarEventos();

function cargarEventos(){
botones.addEventListener('click',iniciar);
}

function iniciar(e){
    e.preventDefault();
    console.log('si valeee');
}