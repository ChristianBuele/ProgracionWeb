var xxx= localStorage.getItem('id_usuario')
    if(jaja===null){//si es que no hay usuario
        location.href="index.html"
    }else{
        document.getElementById('idUser').setAttribute('value',xxx);
    }

document.getElementById('saveTarjeta').addEventListener('click',enviar())
       
function enviar(){
    console.log('enviando')
    var numTarjeta=document.getElementById('inputNumero').value
    console.log(numTarjeta);
    var nombre=document.getElementById('inputNombre').value
    console.log(nombre);
    var combo = document.getElementById("selectMes");
    var mes = combo.options[combo.selectedIndex].text;
    console.log(mes);
    var combo2 = document.getElementById("selectYear");
    var anio = combo2.options[combo2.selectedIndex].text;
    console.log(anio);
    var ccv=document.getElementById('inputCCV').value
    var idUs=localStorage.getItem('id_usuario');
    console.log(ccv);    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(
        { "id_usuariot":idUs,
        "num_tarjeta":numTarjeta,
        "nombre_tarjeta":nombre,
        "mes_expiracion":mes,
        "anio_expiracion":anio,
        "ccv_tarjeta":ccv
    });
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
fetch("https://servidorinfinity.herokuapp.com/api/producto/tarjeta/", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));
}
