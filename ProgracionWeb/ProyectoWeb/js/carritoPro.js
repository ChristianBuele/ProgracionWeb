// variables
cargarCarritoPresets();
const carrito = document.getElementById('carrito_tabla');
var suma=0;
const listaCursos = document.querySelector('#lista-carrito tbody');
const precioFinal = document.querySelector('#miprecio');
var id_us = localStorage.getItem("id_usuario");
cargarEventListeners();
//listener
var controlador=0;
function cargarEventListeners() {
    ///para eliiminar producto
    carrito.addEventListener('click', eliminarCurso);
    //para cargar datos almacenados
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


//funciones
//para vaciar el carrito
function vaciarCarrito() {
    console.log("VACIANDO CARRITO")
    var requestOptions = {
        method: 'GET',
      };
      var urlrt="https://servidorinfinity.herokuapp.com/api/producto/vaciarCarrito/"+id_us;
      fetch(urlrt, requestOptions)
        .then(response => response.text())
        .then(result => refrescar())
        .catch(error => console.log('error', error));
}
function refrescar(){
   location.href="carrito.html";
    
}
function vaciarLocalStorage() {
    localStorage.clear();
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cargarPrecios(cursosLS);
}


////apara eliminiar cosas del carrito
function eliminarCurso(e) {
    
        e.preventDefault();
        console.log('eliminando');
        let curso = e.target.parentElement.parentElement; 
        let cursoId;
        if (e.target.classList.contains('borrar-curso')) {
            if(curso.querySelector('a').getAttribute('id')==='preset'){
                console.log('eliminado preset')
                e.target.parentElement.parentElement.remove();
                
                cursoId = curso.querySelector('a').getAttribute('data-id');
                eliminarPresetLocalStorage(cursoId);
            }else{
                console.log('eliminar producto')
                e.target.parentElement.parentElement.remove();
                curso = e.target.parentElement.parentElement;
                cursoId = curso.querySelector('a').getAttribute('data-id');
                eliminarCursoLocalStorage(cursoId);
            }    
    
    
}
}

function eliminarPresetLocalStorage(cursoId){
    console.log('elimiando preset');
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      url="https://servidorinfinity.herokuapp.com/api/producto/eliminarpc/"+localStorage.getItem('id_usuario')+','+cursoId
      fetch(url)
        .then(response => response.text())
        .then(result => actualizarrecio(result))
        .catch(error => console.log('error', error)); 
}
//eliminar del local

function eliminarCursoLocalStorage(curso) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      url="https://servidorinfinity.herokuapp.com/api/producto/eliminarcarrpro/"+id_us+','+curso;
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => actualizarrecio(result))
        .catch(error => console.log('error', error));
}
//comprueba que existan elementos almacenados
function obtenerCursosLocalStorage() {
    let cursosLs;

        cursosLs = leerLocalStorage();
        //cargarPrecios(cursosLs);
    //paso a cargar los precios de los preoductos

    return cursosLs;


}
function cargarPrecios(cursosLS) {
    precioFinal.innerHTML = '';
    let suma = 0;
    cursosLS.forEach(function (curso) {
        console.log(suma);
        suma += parseInt(curso.precio.substr(1, curso.precio.length - 1), 10);
    });
    const dato = document.createElement('h2');
    dato.innerHTML = `<h2>${suma}</h2>`;
    precioFinal.appendChild(dato);
}
///muesto los datos guardados
function leerLocalStorage() {

    console.log('cargando datos de presets')
    url="https://servidorinfinity.herokuapp.com/api/producto/cargarCarPro/"+id_us;
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        .then(function (data) {
            procesamiento(data)
        })
        .catch(function (error) {
            alert('error' + error.message)
        });
        
}

function actualizarrecio(precio){
    console.log(precio);
    precioFinal.innerHTML='';
    if(precio==='false'){

    }else{
        var nuevoprecio=operar(precio);
        const dato = document.createElement('h2');
        dato.innerHTML = `<h2>${nuevoprecio}</h2>`;
        precioFinal.appendChild(dato);
        localStorage.setItem("valorFactura",nuevoprecio);
        controlador=0;
    }
}
function cargarCarritoPresets(){
    var requestOptions = {
        method: 'POST'
      }
      fetch("https://servidorinfinity.herokuapp.com/api/producto/productosCarrito/"+localStorage.getItem("id_usuario"), requestOptions)
        .then(resp => resp.json())
        .then(function (data) {
          addPresetsCarrito(data);
        })
        .catch(function (error) {
          alert('error' + error.message)
        });
}

function addPresetsCarrito(data){
    for(var i=0;i<data.length;i++){
        const row=document.createElement('tr');
        suma+=data[i].precioProducto
        row.innerHTML=` 
        <td> 
        <img id="fotoPre${i}" style="width: 100px; height:100px" src=""> </td>
        <td>${data[i].nombreProducto}</td>
        <td>${data[i].precioProducto}</td>
        <td>
        <a href="#" class="borrar-curso" id="preset" data-id="${data[i].idCarritoPre}">X</a>
        </td>
        `;
        listaCursos.appendChild(row);
     document.getElementById('fotoPre'+i).setAttribute('src','data:image/jpeg;base64,'+data[i].imagen); 
    }
    addPrecioNueevo();
}

function procesamiento(json) {
    datos = json;
    
    for (var i = 0; i < json.length; i++) {
        var obj = json[i];
        const row = document.createElement('tr');
        suma=suma+datos[i].precio;
        row.innerHTML = ` 
     <td> 
     <img id="foto${i}" style="width: 100px; height:100px" src=""> </td>
     <td>${datos[i].nombre}</td>
     <td>${datos[i].precio}</td>
     <td>
     <a href="#" class="borrar-curso" id="producto" data-id="${datos[i].id}">X</a>
     </td>
     `;
     listaCursos.appendChild(row);
     document.getElementById('foto'+i).setAttribute('src','data:image/jpeg;base64,'+json[i].imagen); 
    };
    addPrecioNueevo();
    }

    function addPrecioNueevo(){
        const dato = document.createElement('h2');
        precioFinal.innerHTML=``
        dato.innerHTML = `<h2>${suma}</h2>`;
        precioFinal.appendChild(dato);
        localStorage.setItem("valorFactura",suma);
    }
function operar(precio){
    var a=0
    try{
        a=precio*1+34;
        if(a>0){
            return precio;    
        }
        console.log(a);
        return 0;
    }catch (error){
        return 0;
    }
}