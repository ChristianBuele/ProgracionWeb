/*var respuesta = document.getElementById('imagen');
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8082/api/producto/nombre/1");
xhr.responseType = "blob";
xhr.onload = response;
xhr.send();

function response(e) {
    var urlCreator = window.URL || window.webkitURL;
    
    var imageUrl = urlCreator.createObjectURL(this.response);
    document.querySelector("#image").src = imageUrl;
 }*/
/*
 innerHtml=`
 
 <div class="card text-center border-info bg-dark">
            <div class="card-body">
              <h4 class="card-title">Evento Basico</h4>
              <p class="precio">$100  </p>
              <img class="card-img-top" src="img/MIG_1980.jpg">
              <p style="border:1;color: white;" class="card-text">Nuestro producto de Evento Basico incluye el acompañamiento a la recepción de tu evento,
                como resultado te vamos a entregar el total de 20 fotos. Porfavor deja todo en nuestras manos y veras que no te arrepentiras de nuestros servicios. 
                Tendras cubierto todos los momentos de tu evento social de una manera muy profesional. </p>
              <a style="border-radius: 15px;" href="#" class="btn btn-primary agregar-carrito" data-id="4"><i class="fas fa-cart-plus"></i>Agregar al carrito</a>
            </div>
          </div>
 
 
 `*/
var datos;
var contador=0;
var aux=0;
console.log('cargando datos de presets')
fetch("https://servidorinfinity.herokuapp.com/api/producto/cargarProductos/")
  .then(resp => resp.json())
  .then(function (data) {
    procesamiento(data)
  })
  .catch(function (error) {
    alert('error'+error.message)
  });


function procesamiento(json) {
  datos=json;
  console.log(json)
  for (var i = 0; i < json.length; i++) {
    
    var obj = json[i];
    if(i===3){
      aux++;
    }
    document.getElementById("contenedor"+aux).innerHTML += `
  <div class="card text-center border-info bg-dark">
              <div class="card-body">
                <h4 class="card-title">${datos[i].nombre}</h4>
                <p class="precio">${datos[i].precio}  </p>
                <div id="contenedorImagen">
                <img class="card-img-top" id="img${i}" src="" >
                </div>
                
  
                <p style="border:1;color: white;" class="card-text">${datos[i].descripcion} </p>
                <a style="border-radius: 15px;"   class="btn btn-primary agregar-carrito" data-id="${datos[i].id_producto}"><i class="fas fa-cart-plus align-middles" ></i>Agregar al carrito</a>
              </div>
            </div>
  `;
 // document.getElementById("img"+i).src='data:image/jpeg;base64,'+json[i].imagen
  document.getElementById('img'+i).setAttribute('src', 'data:image/jpeg;base64,'+json[i].imagen);
}
  
  
}






