var usuario_id=localStorage.getItem('id_usuario')

var formularios = document.getElementById('formularioLog');
var respuesta = document.getElementById('respuesta');
var apiUrl = "https://servidorinfinity.herokuapp.com/api/producto/login/";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function login () {
  e.preventDefault();
  console.log('vamos a logear ' + formularios.get)
  var datos = new FormData(formularios);
  var raw = JSON.stringify(
    {
      "correo_usuario": datos.get('correoUsuario'),
      "contrasenia_usuario": datos.get('contraUsuario'),
      "rol": 'usuario'
    });
  console.log(raw)
  enviar(raw, datos.get('correoUsuario'));
};



  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        
      console.log('User signed out.');
    });
    
   facebooklogout()
      localStorage.removeItem('id_usuario')
  }

  function facebooklogout() {
    try {
        if (FB.getAccessToken() != null) {
            FB.logout(function(response) {
           
            });
        } else {
         
        }
    } catch (err) {
      
    }
   }

//google
function onSignIn(googleUser) { //cuando inicia sesion con google
  var boo=localStorage.getItem('id_usuario')
  if(boo===null){
    var profile = googleUser.getBasicProfile();
    update_user_data(profile);
  }

}


function update_user_data(profile) {
  var raw = JSON.stringify(
    {
      "correo_usuario": profile.getEmail(),
      "contrasenia_usuario": profile.getId(),
      "rol": 'usuario'
    });
  enviar(raw, profile.getEmail())
}
//facebook
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  var boole=localStorage.getItem('id_usuario')
  if(boole!==null){
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      alert('Usuario no autorizado')
    }
  }
  
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '2899175583499642',
    cookie: true,
    xfbml: true,
    version: 'v7.0'
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful. See statusChangeCallback() for when this call is made.
function testAPI() {
  FB.api('/me', { locale: 'en_US', fields: 'id,email' }, function (response) {
    var raw = JSON.stringify(
      {
        "correo_usuario": response.email,
        "contrasenia_usuario": response.id,
        "rol": 'usuario'
      });
    console.log('se va ' + raw)
    enviar(raw, response.email);
  });

}

//
function enviar(raw, correo) {
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    // redirect: 'follow'
  };
  fetch(apiUrl, requestOptions)
    .then(response => response.text())
    .then(result => accion(result, correo))
    .catch(error => alert('Intente de nuevo'));
}
function accion(result, correo) {
  const validez = document.createElement('h1');
  respuesta.innerHTML = ``
  console.log('creandooooo')
  validez.innerHTML = `
    <h1 style="font-size:15px; color:red">${result}</h1>
    `;
  respuesta.appendChild(validez)
  if (result === "Bienvenido") {
    almacenarDatos(correo)
   
    
  }else{
    signOut() 
    alert('Ssion cerrdad')
  }

}

function almacenarDatos(correo) {
  if (typeof (Storage) !== "undefined") {
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      // redirect: 'follow'
    };
    console.log('se va el correo '+correo)
    fetch("https://servidorinfinity.herokuapp.com/api/producto/correo/" + correo, requestOptions)
      .then(response => response.text())
      .then(result => guardarDatosUsuario(result))
      .catch(error => alert(erro+'Intente de nuevo ' + error));


  } else {
    console.log("no soporta web storage")
  }


}
function guardarDatosUsuario(id) {
  localStorage.setItem("id_usuario", id);
  console.log('id almecnado ' + id)
  console.log('el ide que estaba guardado es ' + localStorage.getItem("id_usuario"));
  location.href = "index.html"
}

