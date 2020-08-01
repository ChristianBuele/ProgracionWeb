/*var formularios = document.getElementById('formularioLog');
var respuesta = document.getElementById('respuesta');
var apiUrl = "http://localhost:8082/api/producto/usuario/";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

formularios.addEventListener('submit', function (e) {
     e.preventDefault();
     console.log('vamos a logear '+formularios.get)
     var datos=new FormData(formularios);
     var raw=JSON.stringify(
          {
               "id_carrito": 1,
               "nombre_usuario": datos.get('name'),
               "apellido_usuario": datos.get('apellido'),
               "correo_usuario": datos.get('correo'),
               "contrasenia_usuario": datos.get('contrasenia'),
               "rol": 'usuario'
          });
          enviar(myHeaders,raw);
}
);

function onSignIn(googleUser) { //cuando inicia sesion con google
     var profile = googleUser.getBasicProfile();
     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
     update_user_data(profile);
}

function update_user_data(profile) {

     var datosUsuario = {
          nombre_usuario: profile.getName(),
          apellido_usuario: profile.getName(),
          correo_usuario: profile.getEmail(),
          contraseria_usuario: profile.getId(),
          rol: 'usuario'
     }
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
     enviar(myHeaders, raw);
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
     enviar(myHeaders, raw);
     });

   }
   function enviar(myHeaders, raw) {
     var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
     };
     fetch(apiUrl, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
}*/