// variables

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

//const listaCursos=document.querySelector('#lista-carrito tbody');


cargarEventListeners();
//listener

function cargarEventListeners(){
    //cuando ppngo el add carrito
    cursos.addEventListener('click',comprarCurso);
}


//funciones

//para a;adir al carrito
function comprarCurso(e){
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')){
        const curso= e.target.parentElement;
        console.log(curso);
        ///hago la toma de datos del curso
        leerDatosCurso(curso);
     }
}
//datos curso
function leerDatosCurso(curso){
const infoCurso={
    imagen:curso.querySelector('img').src,
    titulo:curso.querySelector('h4').textContent,
    precio:curso.querySelector('.precio').textContent,
    id:curso.querySelector('a').getAttribute('data-id')
}
console.log(infoCurso);
guardarDatos(infoCurso);
//insertarCarrito(infoCurso);
}
function guardarDatos(curso){
    console.log('entra a guardar los datos');


}

function obtenerCursosLocalStorage(){
let cursos;
cursos=obtenerCursosLocalStorage();
console.log(cursos);
}

//comprueba que existan elementos almacenados
function obtenerCursosLocalStorage(){
    let cursosLs;
    if(localStorage.getItem('cursos')==null){
        cursosLs=[];
    }else{
        cursosLs=JSON.parse(
        localStorage.getItem('cursos'));
    }
    return cursosLs;


    }


function insertarCarrito(curso){
     const row= document.createElement('tr');
     row.innerHTML= ` 
     <td> 
     <img src="${curso.imagen}"> </td>
     <td>${curso.titulo}</td>
     <td>${curso.precio}</td>
     <td>
     <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>

     </td>


     `;
     listaCursos.appendChild(row);
     console.log('si vale hasta aqui');
}