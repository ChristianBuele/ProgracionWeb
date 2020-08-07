var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
var markerEntrega;
var markerFiesta;
var tarjeta;
var datosTarjeta;
var confirmacionMapa;
var confirmacionTarjeta;
const usuarioprueba= localStorage.getItem("id_usuario")
    if(usuarioprueba===null){
        console.log('no hay usuario')
        alert('Antes de comprar debe iniciar sesión')
        location.href="login.html"
    }
cargarDatosFinales();
function cargarDatosFinales(){
    var valor=localStorage.getItem('valorFactura');
    document.getElementById('precioFinal').innerHTML=`<label for="inputPassword4"  id="totalPagar"><i class="fas fa-dollar-sign" ></i> ${valor}</label>`;
}
//console.log('el valor a pagar es '+document.getElementById('totalPagar').textContent)
if (localStorage.getItem('id_usuario') !== 'undefined') {
    console.log("Bienvenido " + localStorage.getItem('id_usuario'))
    cargarDatos();
} else {
    location.href = 'login.html'
}

function guardarSeleccion(e) {
    tarjeta = e;
    confirmacionTarjeta = true;
}

function cargarDatos() {
    var requestOptions = {
        method: 'POST'
    }
    fetch("https://servidorinfinity.herokuapp.com/api/producto/listarTarjetas/" + localStorage.getItem("id_usuario"), requestOptions)
        .then(resp => resp.json())
        .then(function (data) {
            procesamiento(data)
        })
        .catch(function (error) {
            alert('error' + error.message)
        });
}

function procesamiento(json) {
    console.log("llega el json " + json)
    datosTarjeta = json;
    for (var i = 0; i < json.length; i++) {
        var numTarjeta = json[i].num_tarjeta;
        document.getElementById('listaTarjetas').innerHTML += ` <a class="dropdown-item" onclick="guardarSeleccion(${json[i].id_tarjeta})">  <i class="far fa-credit-card"></i>   ${numTarjeta}</a>`;
    }
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: -2.899612, lng: -78.991506 },
        disableDefaultUI: true,
        rotateontrol: true,
        streetViewControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.HYBRID,
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.TERRAIN]
        }
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var posicionUsuario = new
                google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                ;
            markerEntrega = new google.maps.Marker({
                position: posicionUsuario,
                map: map,
                draggable: true,
                icon: 'img/iconos/fiesta.png'
            });
            markerFiesta = new google.maps.Marker({
                position: posicionUsuario,
                map: map,
                draggable: true,
                icon: 'img/iconos/home.png'
            });
            var infowindowEntrega = new google.maps.InfoWindow({
                content: '<div style="color:black"> <p>Dirección Entrega</p> <h7>Colocar en la ubicacion exacta para poder realizar la entrega del trabajo fotográfico</h7></div>'

            });
            var infowindowFiesta = new google.maps.InfoWindow({
                content: '<div style="color:black"> <p>Dirección Evento</p> <h7>Colocar en la ubicacion exacta de la locacion del evento</h7></div>'
            });

            infowindowEntrega.open(map, markerEntrega);
            infowindowFiesta.open(map, markerFiesta);
            map.setCenter(posicionUsuario);

            google.maps.event.addListener(markerEntrega, 'click', function () {
                infowindowEntrega.open(map, markerEntrega);
            });
            google.maps.event.addListener(markerFiesta, 'click', function () {
                infowindowFiesta.open(map, markerFiesta);
            });
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // el navegador no es compatible o no lo permite
        handleNoGeolocation(false);
    }


    function handleNoGeolocation(errorFlag) {

    }

}

function guardarUbicaciones() {
    console.log('cargando' + markerEntrega)
    try {
        if (markerEntrega.getPosition() === markerFiesta.getPosition()) {
            alert('Corriga la posicion de los marcadores de ubicación')
        } else {
            console.log('cargando' + markerEntrega.getPosition())
            confirmacionMapa = true;
            alert('Ubicacioon Guardada')
        }
    } catch (error) {
        alert('Espere un momento')
    }




}
var fecha;
var fechaEvento;

function confirmarCompra() {
    var valorP=document.getElementById("totalPagar").textContent
    console.log('la fecha es' + fecha)
    if (fecha === 'true') {
        if (confirmacionMapa) {
            if (confirmacionTarjeta) {
                console.log('confirmando compra')
                pagar(valorP)
            } else {
                alert('Seleccione una tarjeta')
            }
        } else {
            alert('Verifique la ubicaciones del mapa')
        }
    } else {
        alert('Seleccione una fecha correcta')
    }

}
var fecha_actual;
window.onload = function () {
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth() + 1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if (dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10)
        mes = '0' + mes //agrega cero si el menor de 10
    document.getElementById('fechaActual').value = ano + "-" + mes + "-" + dia;
    fecha_actual=dia+"/"+mes+"/"+ano;
}

document.getElementById('fechaActual').addEventListener('change', function () {
    // se ejecuta cuando el datepicker cambie de valor
    var input_date = this.value;
    var now = new Date();
    var date_selected = new Date(input_date);
    if (now > date_selected) {
        fecha = 'false';
        alert('Seleccione una fecha valida')

    }
    else {
        fecha = 'true';//               2020/20/20
        var aux = input_date.split("-")
        fechaEvento = aux[2] + "/" + aux[1] + "/" + aux[0]

        console.log('la fecha del evento es ' + fechaEvento)
    }

})
function pagar(valorAPagar) {
    console.log("se va a pagar "+valorAPagar)
    var fiesta=markerFiesta.getPosition().toString();
    var entrega=markerEntrega.getPosition().toString();
    console.log(fiesta+" "+entrega)
    var id_usuario=localStorage.getItem("id_usuario");
    var raw = JSON.stringify({
        "id_tarjeta": tarjeta,
        "precio_final": valorAPagar,
        "id_carrito": '0',
        "id_factura": '0',
        "fecha_venta": fecha_actual,
        "fecha_evento": fechaEvento,
        "direccion_evento": fiesta,
        "direccion_Entrega": entrega,
        "id_usuario": id_usuario
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    fetch("https://servidorinfinity.herokuapp.com/api/producto/pagar/", requestOptions)
        .then(response => response.text())
        .then(result => confiPago(result))
        .catch(error => console.log('error', error));
}

function confiPago(band) {
    console.log(band)
    if (band === "true") {
        console.log('Pago Exitoso')
        alert('Gracias por su compra. La factura fue enviada a su correo');
        location.href="graciasCompra.html"
    } else {
        alert('No se ha podido realizar el pago ' + band);
    }
}




