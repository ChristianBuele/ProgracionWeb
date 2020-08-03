var obj
premium();
free();
function premium() {
  console.log('cargando datos de presets')
var requestOptions = {
  method: 'POST'
}
fetch("http://localhost:8082/api/producto/presets/premium/", requestOptions)
  .then(resp => resp.json())
  .then(function (data) {
    procesamiento(data)
  })
  .catch(function (error) {
    alert('error' + error.message)
  });
}
function free() {
  console.log('cargando datos de presets')
  var requestOptions = {
    method: 'POST'
  }
  fetch("http://localhost:8082/api/producto/presets/free/", requestOptions)
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
        document.getElementById("contenidoPresetsPremium").innerHTML += `
      <div class="carousel-item active">
            <img src="" id="presetPremiumId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
            </div>
          </div>
      `;
      } else {
        document.getElementById("contenidoPresetsPremium").innerHTML += `
      <div class="carousel-item ">
            <img src="" id="presetPremiumId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
            </div>
          </div>
      `;
      }

      document.getElementById('presetPremiumId' + i).setAttribute('src', 'data:image/jpeg;base64,' + json[i].bytesImagen);
    }
  }
console.log("Termina de cargar")

}
function procesamientofree(json) {
  var image = new Image();
  for (var i = 0; i < json.length; i++) {
    if (json[i].categoriaPreset === "Premium") {

      if (i === 0) {
        document.getElementById("contenidoPresetsFree").innerHTML += `
      <div class="carousel-item active">
            <img src="" id="presetPremiumId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
            </div>
          </div>
      `;
      } else {
        document.getElementById("contenidoPresetsPremium").innerHTML += `
      <div class="carousel-item ">
            <img src="" id="presetPremiumId${i}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${json[i].id_preset}:${json[i].nombrePreset}</h5>
              <p>${json[i].descripcionPreset}</p>
              <p class="precio">$${json[i].precioPreset}  </p>
            </div>
          </div>
      `;
      }

      document.getElementById('presetPremiumId' + i).setAttribute('src', 'data:image/jpeg;base64,' + json[i].bytesImagen);
    }
  }
console.log("Termina de cargar")

}