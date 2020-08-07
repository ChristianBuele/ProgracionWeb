const verificacionProducto=document.querySelector('#verificacionProducto');
const verificacionCombo=document.querySelector('#verificacionCombo');
const verificacionUsuario=document.querySelector('#verificacionUsuario');
iniciar();

function iniciar(){
  //  btn_addUsuario.addEventListener('click',ejecutarBotones);
  cargareventos();
  cargarproductis();
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
function cargareventos() {
    var request = new Request('https://servidorinfinity.herokuapp.com/api/producto/listarEventosProximos/');
    productosCaducados()
    function productosCaducados() {
        fetch(request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                $('#Tablea').append(
                    '<tr  style="color: aliceblue"> <th scope="col" >Fecha</th>' +
                    '<th contenteditable scope="col">Tipo Evento</th>' +
                    '<th scope="col">Lugar Evento</th>' +
                    '<th scope="col">Cliente</th>' +
                    '</tr>'
                )
                if (data.length == 0) {
                    alert('No existen Eventos')
                }
                for (var i = 0; i < data.length; i++) {
                    console.log("PEROOOO")
                    console.log(data[i].fechaEvento);
                    $('#Tablea').append(
                        ' <tr style="color: aliceblue"><th scope="row">' + data[i].fechaEvento + '</th>' +
                        ' <td>' + data[i].nombreProducto + '</td>' +
                        '<td>' + data[i].direccionEvento + '</td>' +
                        '<td>' + data[i].nombreUsuario + '</td>' +
                        ' </tr>'
                    )
                }
            }).catch(err => console.log(err))
    }
}
function cargarproductis() {
    var request = new Request('https://servidorinfinity.herokuapp.com/api/producto/produ');
    productosEditar()
    function productosEditar() {
        fetch(request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.length == 0) {
                    alert('No existen Eventos')
                }
                for (var i = 0; i < data.length; i++) {
                    console.log("PEROOOO")
                    console.log(data[i].fechaEvento);
                    $('#Tablep').append(
                        ' <tr style="color: aliceblue"><th scope="row">' + data[i].nombre + '</th>' +
                        ' <td>' + data[i].descripcion + '</td>' +
                        '<td>' + data[i].precio + '</td>' +
                        '<td> <button type="button" onclick="eliPro('+data[i].id_producto+')"'+
                        +'class="btn btn-sm btn-rounded btn-sm my-0 "><iclass="far fa-trash-alt"></i> Eliminar</button></span>+</td> '+
                        ' </tr>'
                    )
                }
            }).catch(err => console.log(err))
    }
}
function eliPro(e) {
    console.log("eliminando " + e)
    var requestOptions = {
        method: 'POST'
    }
    var url = "https://servidorinfinity.herokuapp.com/api/producto/eliminarProducto/" + e ;
    console.log(url)
    fetch(url, requestOptions)
        .then(resp => resp.text())
        .then(function (data) {
            proW(data)
        })
        .catch(function (error) {
            console.log('error' + error.message)
        });
}
function proW(e) {
    console.log('entra a redic')
    location.href = "admin.html"
}