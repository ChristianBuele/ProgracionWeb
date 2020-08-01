var bton=document.getElementById('cargarfoto').onclick=arrancar

function arrancar(){
console.log('si entra')
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:8082/api/producto/nombre/escudo-inge-03.png", requestOptions)
  .then(response => response.blob())
  .then(images => {
    // Then create a local URL for that image and print it 
    outside = URL.createObjectURL(images)
    console.log(outside)})
  .catch(error => console.log('error', error));
}
