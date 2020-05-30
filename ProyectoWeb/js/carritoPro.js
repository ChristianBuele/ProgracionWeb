// variables

const carrito = document.getElementById('carrito_tabla');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

const listaCursos = document.querySelector('#lista-carrito tbody');


cargarEventListeners();
//listener

function cargarEventListeners() {
    ///para eliiminar producto
    carrito.addEventListener('click', eliminarCurso);
    //para vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    //para cargar datos almacenados
    document.addEventListener('DOMContentLoaded', leerLocalStorage);


}


//funciones
//para vaciar el carrito
function vaciarCarrito(e) {
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    
    vaciarLocalStorage();
    return false;
}
function vaciarLocalStorage() {
    localStorage.clear();  
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
        console.log(cursoId);
    }
    eliminarCursoLocalStorage(cursoId);

}

//eliminar del local

function eliminarCursoLocalStorage(curso) {
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage(); //arreglo de productos
    cursosLS.forEach(function (cursoLS, index) {
        if (cursoLS.id == curso) {
            cursosLS.splice(index, 1);
        }
    });
    console.log('si eliminaaaaaaaaaaaa');
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
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
    //paso a cargar los precios de los preoductos
  
    return cursosLs;


}

///muesto los datos guardados
function leerLocalStorage() {

    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    console.log(cursosLS);

    cursosLS.forEach(function (curso) {
        const row = document.createElement('tr');
        row.innerHTML = ` 
     <td> 
     <img src="${curso.imagen}" style="width: 100px; height:100px"> </td>
     <td>${curso.titulo}</td>
     <td>${curso.precio}</td>
     <td>
     <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>

     </td>


     `;
        listaCursos.appendChild(row);
    });
}