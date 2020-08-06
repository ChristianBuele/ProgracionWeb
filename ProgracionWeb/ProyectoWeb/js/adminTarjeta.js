const botones=document.getElementById('saveTarjeta');
var xxx = localStorage.getItem('id_usuario')
if (jaja === null) {//si es que no hay usuario
    location.href = "index.html"
} else {
    document.getElementById('idUser').setAttribute('value', xxx);
}
cargarTarjetas();
console.log('jjhjhjhjhjhjhjhj')
fac();
//botones.addEventListener('click',enviar());

function enviar() {
    console.log('enviando')
    var numTarjeta = document.getElementById('inputNumero').value
    console.log(numTarjeta);
    var nombre = document.getElementById('inputNombre').value
    console.log(nombre);
    var combo = document.getElementById("selectMes");
    var mes = combo.options[combo.selectedIndex].text;
    console.log(mes);
    var combo2 = document.getElementById("selectYear");
    var anio = combo2.options[combo2.selectedIndex].text;
    console.log(anio);
    var ccv = document.getElementById('inputCCV').value
    var idUs = localStorage.getItem('id_usuario');
    console.log(ccv);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(
        {
            "id_usuariot": idUs,
            "num_tarjeta": numTarjeta,
            "nombre_tarjeta": nombre,
            "mes_expiracion": mes,
            "anio_expiracion": anio,
            "ccv_tarjeta": ccv,
            "saldo": 100000,
            "estado": 1
        });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://localhost:8082/api/producto/tarjeta/", requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error));
        return false;
}

function cargarTarjetas() {

    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    fetch("https://servidorinfinity.herokuapp.com/api/producto/listarTarjetas/" + 6, requestOptions)
        .then(response => response.json())
        .then(result => procesarTarjeta(result))
        .catch(error => console.log('error', error));
}
function procesarTarjeta(result) {
    console.log(result)
    for (var i = 0; i < result.length; i++) {
        console.log(i)
        document.getElementById('filas').innerHTML += `
        <tr>
        <td>${result[i].num_tarjeta}</td>
        <td><button onclick="eliminar(${result[i].id_tarjeta})" class="btn btn-primary"> <i class="far fa-trash-alt"></i>  Eliminar</button></td>
         </tr>
        
        `;
    }
}
function eliminar(e){
    console.log(e)
    fetch("https://servidorinfinity.herokuapp.com/api/producto/tarjeta/" + e)
    .then(response => response.json())
    .then(result => recarga(result))
    .catch(error => console.log('error', error));
}
function recarga(sa){
    location.href="configuracion.html"
}
function fac(){
    console.log("PEROOOOOOH")
    var request = new Request('http://localhost:8082/api/producto/listarFacturas/6');
    facturas()
    function facturas() {
        fetch(request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.length == 0) {
                    alert('No existen Eventos')
                }
                for (var i = 0; i < data.length; i++) {
                    $('#tablefac').append(
                        ' <tr style="color: aliceblue"><th scope="row">' + data[i].id_factura + '</th>' +
                        ' <td>' + data[i].fecha_factura + '</td>' +
                        ' <td>' + data[i].nombre_producto+ '</td>' +
                        '<td>' + data[i].cantidad_factura + '</td>' +
                        '<td>' + data[i].precio_factura + '</td>' +
                        ' </tr>'
                    )
                }
            }).catch(err => console.log(err))
    }
}