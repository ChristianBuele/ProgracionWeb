function addPreset(id){
console.log('entra el id '+id)
var id_usuario=localStorage.getItem('id_usuario')
var myHeaders = new Headers();
var f = new Date();
var id_usuarioSend=id;
var fecha_actual = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
console.log('la fecha actua es '+fecha_actual)
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({ "id_preset": id_usuarioSend, "fecha": fecha_actual,"id_usuario":id_usuario});
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
fetch("http://localhost:8082/api/producto/preCarrito/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
