//const btn_addProductos = document.querySelector('.datosProductos');
//const btn_addCombo = document.getElementById('add_combos');
const btn_addUsuario = document.getElementById('addUsuarios');
const verificacionProducto=document.querySelector('#verificacionProducto');
const verificacionCombo=document.querySelector('#verificacionCombo');
const verificacionUsuario=document.querySelector('#verificacionUsuario');
iniciar();

function iniciar(){
    
    btn_addProductos.addEventListener('click',ejecutarBotones);
   // btn_addCombo.addEventListener('click',ejecutarBotones);
    btn_addUsuario.addEventListener('click',ejecutarBotones);
}
function ejecutarBotones(e){
    e.preventDefault();
    if (e.target.classList.contains('iniciarPro')) {
        addProductos();
    }else if(e.target.classList.contains('iniciarCombo')){
        addCombo();
    }else if(e.target.classList.contains('iniciarUsuarios')){
        addUsuarios();
    }

}
function addCombo(e){
    console.log('COMBO');
    verificacionCombo.innerHTML=``;
    var nomCombo = document.getElementById("nomCombo").value;
   var precioCombo=document.getElementById("precioCombo").value;
   var desCombo=document.getElementById("desCombo").value;
   
   


   if(nomCombo.length==0 | precioCombo.length==0 | desCombo.length==0){
    const datos=document.createElement('h1');
    datos.innerHTML=`
    <h1 style="font-size:15px;">Llenar todos los campos</h1>
    `;
    verificacionCombo.appendChild(datos);

   }else{
    alerta();
   }

}
function addProductos(e){
    console.log('PRODUCTO');
    verificacionProducto.innerHTML=``;
    var nomProducto = document.getElementById("nomProducto").value;
   var precioProducto=document.getElementById("precioProducto").value;
   var desProducto=document.getElementById("desProducto").value;
   if(nomProducto.length==0 | precioProducto.length==0 | desProducto.length==0){
    const datos=document.createElement('h1');
    datos.innerHTML=`
    <h1 style="font-size:15px;">Llenar todos los campos</h1>
    `;
    verificacionProducto.appendChild(datos);

   }else{
    alerta();
   }
 
   
}
function addUsuarios(e){
    console.log('USUARIO');
    verificacionUsuario.innerHTML=``;
    var nomUsuario = document.getElementById("nomUsuario").value;
   var appUsuario=document.getElementById("appUsuario").value;
   var correoUsuario=document.getElementById("correoUsuario").value;
   var passUsuario=document.getElementById("passUsuario").value;
   if(nomUsuario.length==0 | appUsuario.length==0 | correoUsuario.length==0 | passUsuario.length==0){
    const datos=document.createElement('h1');
    datos.innerHTML=`
    <h1 style="font-size:15px;">Llenar todos los campos</h1>
    `;
    verificacionUsuario.appendChild(datos);

   }else{
    alerta();
   }
 
}


function alerta()
    {
    var mensaje;
    var opcion = confirm("Datos guardados correctamente");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}