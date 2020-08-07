const botones = document.getElementById('btn_registro');
var formularios = document.getElementById('formularioReg');
var respuesta = document.getElementById('respuesta');
var google = document.getElementById('conejillo');
var apiUrl = "https://servidorinfinity.herokuapp.com/api/producto/usuario/";

var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
cargarEventos();

function cargarEventos() {
    
    botones.addEventListener('click', iniciar);
}
var apiUrl = "https://servidorinfinity.herokuapp.com/api/producto/usuario/"
function iniciar(e) {
    e.preventDefault();
    var contra = document.getElementById('contra').value;
    var email = document.getElementById('email').value;
    var apellido = document.getElementById('apellido').value;
    var nombre = document.getElementById('nombre').value;
    var condi = document.getElementById('condi').checked;
    if (contra == "" || email == "" || apellido == "" || nombre == "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (!condi) {
        alert("Porfavor acepte terminos y condiciones");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (contra.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    } else if (!validar_email(email)) {
        alert("Revise el correo Ingresado porfavor");
        return false;
    } else {
        enviarDatos();
    }
}
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}
function enviarDatos() {
    console.log('yendo a enviar')
    var apiUrl = "https://servidorinfinity.herokuapp.com/api/producto/usuario/"

    var datos = new FormData(formularios);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(
        {
            "id_carrito": 1,
            "nombre_usuario": datos.get('nombreUsuario'),
            "apellido_usuario": datos.get('apellidoUsuario'),
            "correo_usuario": datos.get('correoUsuario'),
            "contrasenia_usuario": datos.get('contraUsuario'),
            "rol": 'usuario'
        });
    console.log('se va ' + raw)
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

   // verificarCorreo(datos.get('correoUsuario'))//verifica validez de correo
    if(correoValido){
      fetch(apiUrl, requestOptions)
      .then(response => response.text())
      .then(result => acciones(result))
      .catch(error => console.log('error', error));
    }else{
      alert('Correo Invalido')
      correoValido=false;
    }
   
}
var correoValido=true;

function onSignIn(googleUser) { //cuando inicia sesion con google
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    var p=localStorage.getItem('id_usuario')
    console.log("el id del usario en el local "+p)
    if(p===null){
      update_user_data(profile);
    }else{
      signOut()
      console.log('cerradno sesion de google')
    }
    
}

function update_user_data(profile) {
    var raw = JSON.stringify(
        {
            "id_carrito": 1,
            "nombre_usuario": profile.getName(),
            "apellido_usuario": profile.getName(),
            "correo_usuario": profile.getEmail(),
            "contrasenia_usuario": profile.getId(),
            "rol": 'usuario'
        });
    console.log('se va ' + raw)
    enviar(raw);

   
}
function verificarCorreo(email){
  fetch("https://emailverification.whoisxmlapi.com/api/v1?apiKey=at_2Zm9x24S3a2qV23XYoo2jdzhkikA4&emailAddress="+email)
    .then(response=> response.json())
    .then(result => verEstado(result))
    .catch(error=> alert(error))

}
function verEstado(result){
  var res=result.smtpCheck
  console.log("el correo es"+res)
  if(res){
    correoValido=true
  }else{
    correoValido=false;
  }
}

//facebook
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      alert('Usuario no autorizado')
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
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'}, function (response) {
      console.log('Successful login for: ' + response.first_name);
      console.log('Successful login for: ' + response.last_name);
      var raw = JSON.stringify(
         {
              "nombre_usuario": response.first_name,
              "apellido_usuario": response.last_name,
              "correo_usuario": response.email,
              "contrasenia_usuario": response.id,
              "rol": 'usuario'
         });
    console.log('se va ' + raw)
   enviar(raw);
    });
    
  }

  function enviar(raw){
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(result => acciones(result))
        .catch(error => console.log('error', error));
  }

  function acciones(response) {
    console.log('si llegaaa'+response)
    var arrar=response.split(',')
    var respuesta=arrar[0]
    if (respuesta === 'true') {
      localStorage.setItem('id_usuario',arrar[1])
        location.href = "index.html"

    } else {
        alert('El correo ya está registrado')
    }
}

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
              // user is now logged out from facebook do your post request or just redirect
              console.log('facebbok crrdado')
          });
      } else {
          
      }
  } catch (err) {
     
  }
 }