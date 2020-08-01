var formularios = document.getElementById('cargarProductos');


formularios.addEventListener('submit', function (e) {
     e.preventDefault();
cargar();
});
function cargar(){
console.log('cargando imagen')
  let imagen=document.getElementById("imagenProducto").files[0];
let formData = new FormData();
formData.append("photo",imagen);
fetch("http://localhost:8082/api/producto/uploadFiles",
{

  method:"POST",
  body:formData
}
.then(respnse => respnse.text())
.then(result => console.log(result))
);
}