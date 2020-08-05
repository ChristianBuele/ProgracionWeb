var obj
premium();
free();
function premium() {
  console.log('cargando datos de presets reomiun')
var requestOptions = {
  method: 'POST'
}
fetch("https://servidorinfinity.herokuapp.com/api/producto/presets/premium/", requestOptions)
  .then(resp => resp.json())
  .then(function (data) {
    procesamiento(data)
  })
  .catch(function (error) {
    alert('error' + error.message)
  });
}
function free() {
  console.log('cargando datos de presets gratis')
  var requestOptions = {
    method: 'POST'
  }
  fetch("https://servidorinfinity.herokuapp.com/api/producto/presets/free/", requestOptions)
    .then(resp => resp.json())
    .then(function (data) {
      procesamientofree(data)
    })
    .catch(function (error) {
      alert('error' + error.message)
    });
}


function procesamiento(json) {
  var image = new Image();
  for (var i = 0; i < json.length; i++) {
    if (json[i].categoriaPreset === "Premium") {

      if (i === 0) {
        document.getElementById('itemsPremium').innerHTML+=`
        <li data-target="${json[i].id_preset}" data-slide-to="${i}" class="active"></li>
        `;
        document.getElementById("contenidoPresetsPremium").innerHTML += `
      <div class="carousel-item active">
            <img src="" id="presetPremiumId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
              <a style="border-radius: 15px;" onclick="addPreset(${json[i].id_preset})"  class="btn btn-sm btn-rounded btn-sm my-0 add_preset" style="color: white;" data-id="${json[i].id_preset}"><i class="fas fa-cart-plus align-middles" ></i>Agregar al carrito</a>
            </div>
          </div>
      `;
      } else {
        document.getElementById('itemsPremium').innerHTML+=`
        <li data-target="${json[i].id_preset}" data-slide-to="${i}" class="active"></li>
        `;
        document.getElementById("contenidoPresetsPremium").innerHTML += `
      <div class="carousel-item ">
            <img src="" id="presetPremiumId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
              <a style="border-radius: 15px;" onclick="addPreset(${json[i].id_preset})"   class="btn btn-sm btn-rounded btn-sm my-0 add_preset " style="color: white;" data-id="${json[i].id_preset}"><i class="fas fa-cart-plus align-middles" ></i>Agregar al carrito</a>

            </div>
          </div>
      `;
      }

      document.getElementById('presetPremiumId' + i).setAttribute('src', 'data:image/jpeg;base64,'+json[i].bytesImagen);
    }
  }
console.log("Termina de cargar")

}
function procesamientofree(json) {
  var image = new Image();
  console.log('llega el json '+json)
  for (var i = 0; i < json.length; i++) {
    if (json[i].categoriaPreset === "Free") {

      if (i === 0) {
        document.getElementById('itemsFree').innerHTML+=`
        <li data-target="${json[i].id_preset}" data-slide-to="${i}" class="active"></li>
        `;
        document.getElementById("contenidoPresetsFree").innerHTML += `
      <div class="carousel-item active">
            <img src="" id="presetFreeId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
              <a style="border-radius: 15px;" onclick="addPreset(${json[i].id_preset})"   class="btn btn-sm btn-rounded btn-sm my-0 add_preset" style="color: white;" data-id="${json[i].id_preset}"><i class="fas fa-cart-plus align-middles" ></i>Agregar al carrito</a>
            </div>
          </div>
      `;
      } else {
        document.getElementById('itemsFree').innerHTML+=`
        <li data-target="${json[i].id_preset}" data-slide-to="${i}"></li>
        `;
        document.getElementById("contenidoPresetsFree").innerHTML += `
      <div class="carousel-item ">
            <img src="" id="presetFreeId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
              <a style="border-radius: 15px;" onclick="addPreset(${json[i].id_preset})"   class="btn btn-sm btn-rounded btn-sm my-0 add_preset" style="color: white;" data-id="${json[i].id_preset}"><i class="fas fa-cart-plus align-middles" ></i>Agregar al carrito</a>
            </div>
          </div>
      `;
      }

      document.getElementById('presetFreeId' + i).setAttribute('src', 'data:image/jpeg;base64,' + json[i].bytesImagen);
    }
  }
console.log("Termina de cargar")

}