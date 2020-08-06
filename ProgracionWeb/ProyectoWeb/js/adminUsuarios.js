
function addUser() {
    var nombre = document.getElementById('nombreUsuario').value
    console.log(nombre)
    var apellido = document.getElementById('apellidoUsuario').value
    console.log(apellido)
    var correo = document.getElementById('correoUsuario').value
    console.log(correo)
    var contra = document.getElementById('passUsuario').value
    console.log(contra)
   var apiUrl = "https://servidorinfinity.herokuapp.com/api/producto/usuario/"
    var raws = JSON.stringify(
        {
            "nombre_usuario":nombre,
            "apellido_usuario":apellido,
            "correo_usuario": correo,
            "contrasenia_usuario": contra,
            "rol": 'usuario'
        });
        var myHeaderess = new Headers();
        myHeaderess.append("Content-Type", "application/json");
      
        console.log('se va ' + raws)
        var requestOptionses = {
          method: 'POST',
          headers: myHeaderess,
          body: raws,
          redirect: 'follow'
        };
        fetch(apiUrl, requestOptionses)
          .then(response => response.text())
          .then(result => alert('usuario agregado='+result))
          .catch(error => console.log('error', error));
}
cargarUsuarios()

function cargarUsuarios() {
    var requestOptions = {
        method: 'POST'
    }
    fetch("https://servidorinfinity.herokuapp.com/api/producto/obtenerUsuarios/", requestOptions)
        .then(resp => resp.json())
        .then(function (data) {
            addDatos(data)
        })
        .catch(function (error) {
            alert('error' + error.message)
        });
}

function addDatos(json) {
    for (var i = 0; i < json.length; i++) {
        var estado = json[i].estado
        if (estado === 'activo') {
            document.getElementById('contUsuario').innerHTML += `
            <tr style="color: white;">
            <td class="pt-3-half" contenteditable="true">${json[i].nombre_usuario}</td>
            <td class="pt-3-half" contenteditable="true">${json[i].estado}</td>
            <td>
            <span class="table-remove"><button type="button" onclick="bloquearUs(${json[i].id_usuario})"
                    class="btn btn-sm btn-sm my-0"><i class="fas fa-ban"></i>
                    Bloquear</button></span>
            </td>
            <td> </td>
            <td>
                <span class="table-remove"><button type="button" onclick="eliminarUs(${json[i].id_usuario})"
                                                    class="btn btn-sm btn-rounded btn-sm my-0 "><i
                                                        class="far fa-trash-alt"></i> Eliminar</button></span>
                                        </td>
    
                                        </tr>
            `;
        } else if (estado = "bloqueado") {
            document.getElementById('contUsuario').innerHTML += `
            <tr style="color: white;">
            <td class="pt-3-half" contenteditable="true">${json[i].nombre_usuario}</td>
            <td class="pt-3-half" contenteditable="true">${json[i].estado}</td>
            <td>
   
            </td>
            <td>
            <span class="table-remove"><button type="button" onclick="desbloquearUs(${json[i].id_usuario})"
            class="btn btn-sm btn-sm my-0"><i class="fas fa-ban"></i>
            Desbloquear</button></span>
            </td>
            <td>
                <span class="table-remove"><button type="button" onclick="eliminarUs(${json[i].id_usuario})"
                                                    class="btn btn-sm btn-rounded btn-sm my-0 "><i
                                                        class="far fa-trash-alt"></i> Eliminar</button></span>
                                        </td>
    
                                        </tr>
            `;
        }

    }
}

function bloquearUs(e) {
    console.log("actualizando " + e)
    var requestOptions = {
        method: 'POST'
    }
    var url = "https://servidorinfinity.herokuapp.com/api/producto/actuaEstadoUsuario/" + e + ",bloqueado"
    console.log(url)
    fetch(url, requestOptions)
        .then(resp => resp.text())
        .then(function (data) {
            pro(data)
        })
        .catch(function (error) {
            console.log('error' + error.message)
        });
}
function desbloquearUs(e) {
    console.log("actualizando " + e)
    var requestOptions = {
        method: 'POST'
    }
    var url = "https://servidorinfinity.herokuapp.com/api/producto/actuaEstadoUsuario/" + e + ",activo"
    console.log(url)
    fetch(url, requestOptions)
        .then(resp => resp.text())
        .then(function (data) {
            pro(data)
        })
        .catch(function (error) {
            console.log('error' + error.message)
        });
}
function eliminarUs(e) {
    console.log("actualizando " + e)
    var requestOptions = {
        method: 'POST'
    }
    var url = "https://servidorinfinity.herokuapp.com/api/producto/actuaEstadoUsuario/" + e + ",eliminar";
    console.log(url)
    fetch(url, requestOptions)
        .then(resp => resp.text())
        .then(function (data) {
            pro(data)
        })
        .catch(function (error) {
            console.log('error' + error.message)
        });
}

function pro(e) {
    console.log('entra a redic')
    location.href = "admin.html"
}


