const botones = document.getElementById('listaBotones_login');

iniciar();

function iniciar(){
    botones.addEventListener('click',ejecutarBotones);

}
function ejecutarBotones(e){
    console.log(e);
}