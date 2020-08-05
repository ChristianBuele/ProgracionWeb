// variables

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
var f = new Date();
var fecha_actual = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
var id_us = localStorage.getItem("id_usuario");
cargarEventListeners();
//listener

function cargarEventListeners() {
    //cuando ppngo el add carrito
    cursos.addEventListener('click', comprarCurso);

    //para cargar datos almacenados
    document.addEventListener('DOMContentLoaded', leerLocalStorage);


}


//funciones

//para a;adir al carrito
function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        alert('Su producto ha sido agregado al carrito');
        const curso = e.target.parentElement;
        console.log(curso);
        ///hago la toma de datos del curso
        id = leerDatosCurso(curso);
        obtenerCarrito(id_us,id,fecha_actual);
    }
}
//datos curso
function leerDatosCurso(curso) {
    id = curso.querySelector('a').getAttribute('data-id');
    return id;
}





function insertarCarrito(curso) {
    guardarCursoLocalStorage(curso);
}

function guardarCursoLocalStorage(curso) {
    console.log('entra a guardar los datos');
    let cursos;
    cursos = obtenerCursosLocalStorage();
    //agrego el nuevo curso
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}


//comprueba que existan elementos almacenados
function obtenerCursosLocalStorage() {
    let cursosLs;
    if (localStorage.getItem('cursos') == null) {
        cursosLs = [];
    } else {
        cursosLs = JSON.parse(
            localStorage.getItem('cursos'));
    }
    return cursosLs;


}
///muesto los datos guardados
function leerLocalStorage() {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    console.log(cursosLS);
}
function agrgegarCarritoProductoBase(id_carrito,id_producto,fechaAc) {
    console.log("DATOS")
    console.log(id_carrito)
    console.log(id_producto)
    console.log(fechaAc)    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "id_carrito": id_carrito, "id_producto": id_producto, "fecha": fechaAc, "cantidad":1 });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://localhost:8082/api/producto/productocarrito/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
function obtenerCarrito(id_us){
    var id_carr;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      url="http://localhost:8082/api/producto/idCarrito/"+id_us;
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => {
            id_carr=data;
            agrgegarCarritoProductoBase(id_carr,id,fecha_actual);
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}