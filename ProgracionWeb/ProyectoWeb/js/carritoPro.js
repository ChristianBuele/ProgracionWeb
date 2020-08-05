// variables

const carrito = document.getElementById('carrito_tabla');

const listaCursos = document.querySelector('#lista-carrito tbody');
const precioFinal = document.querySelector('#miprecio');
var id_us = localStorage.getItem("id_usuario");
cargarEventListeners();
//listener

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
        redirect: 'follow'
      };
      var urlrt="http://localhost:8082/api/producto/vaciarCarrito/"+id_us;
      fetch(urlrt, requestOptions)
        .then(response => response.text())
        .then(result => refrescar())
        .catch(error => console.log('error', error));
}
function refrescar(){
    location.href="http://localhost:82/fronendWeb/ProgracionWeb/ProgracionWeb/ProyectoWeb/carrito.html";
    
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
    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}

//eliminar del local

function eliminarCursoLocalStorage(curso) {
    console.log('PERRRO')
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      url="http://localhost:8082/api/producto/eliminarcarrpro/"+id_us+','+curso;
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
    url="http://localhost:8082/api/producto/cargarCarPro/"+id_us;
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
        const dato = document.createElement('h2');
        dato.innerHTML = `<h2>${precio}</h2>`;
        precioFinal.appendChild(dato);
        localStorage.setItem("valorFactura",precio);
    }
}



function procesamiento(json) {
    datos = json;
    var suma=0;
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
     <a href="#" class="borrar-curso" data-id="${datos[i].id}">X</a>
     </td>
     `;
     listaCursos.appendChild(row);
     document.getElementById('foto'+i).setAttribute('src','data:image/jpeg;base64,'+json[i].imagen); 
    };
    const dato = document.createElement('h2');
        dato.innerHTML = `<h2>${suma}</h2>`;
        precioFinal.appendChild(dato);
        localStorage.setItem("valorFactura",suma);
    }
