const botones = document.getElementById('listaBotones_login');
const sesion=document.querySelector('#verificacion');

iniciar();

function iniciar(){
    botones.addEventListener('click',ejecutarBotones);

}
function ejecutarBotones(e){
    e.preventDefault();
    if (e.target.classList.contains('iniciar')) {
        leerDatos();
    }
    

}
function leerDatos(e){
   var usuario = document.getElementById("nomUsuario").value;
   var contras=document.getElementById("password").value;
    sesion.innerHTML=``;
   if(usuario.length==0 | contras.length==0){
    console.log('ingrese usuario');
    const validez=document.createElement('h1');
    validez.innerHTML=`
    <h1 style="font-size:15px;">Ingrese datos en los campos</h1>
    `;
    sesion.appendChild(validez);
   }
    
}