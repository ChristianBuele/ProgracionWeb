// variables

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');



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
        leerDatosCurso(curso);
    }
}
//datos curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    console.log(infoCurso);
    insertarCarrito(infoCurso);
}





function insertarCarrito(curso) {

    guardarCursoLocalStorage(curso);
    // listaCursos.appendChild(row);
    console.log('si vale hasta aqui');
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