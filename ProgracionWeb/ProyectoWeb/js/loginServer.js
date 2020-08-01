var formularios = document.getElementById('formularioLog');
var respuesta = document.getElementById('respuesta');
var apiUrl = "http://localhost:8082/api/producto/login/";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
console.log('jaajjaaj')
formularios.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('vamos a logear '+formularios.get)
    var datos=new FormData(formularios);
    var raw=JSON.stringify(
         {
              "correo_usuario": datos.get('correoUsuario'),
              "contrasenia_usuario": datos.get('contraUsuario'),
              "rol": 'usuario'
         });
         console.log(raw)
         enviar(raw);
});




//google
function onSignIn(googleUser) { //cuando inicia sesion con google
    var profile = googleUser.getBasicProfile();
    update_user_data(profile);
  }
  
function update_user_data(profile) {
    var raw = JSON.stringify(
        {
          "correo_usuario": profile.getEmail(),
          "contrasenia_usuario": profile.getId(),
          "rol": 'usuario'
        });
     enviar(raw)   
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
    FB.api('/me', {locale: 'en_US', fields: 'id,email'}, function (response) {
      var raw = JSON.stringify(
         {
              "correo_usuario": response.email,
              "contrasenia_usuario": response.id,
              "rol": 'usuario'
         });
    console.log('se va ' + raw)
   enviar(raw);
    });
    
  }

//
function enviar(raw) {
    var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
        // redirect: 'follow'
    };
    fetch(apiUrl, requestOptions)
         .then(response => response.text())
         .then(result => accion(result))
         .catch(error => console.log('error', error));
}
function accion(result){
    const validez=document.createElement('h1');
    respuesta.innerHTML=``
    console.log('creandooooo')
    validez.innerHTML=`
    <h1 style="font-size:15px; color:red">${result}</h1>
    `;
    respuesta.appendChild(validez)
    if(result==="Bienvenido"){
        location.href = "http://localhost:81/pro/ProgracionWeb/ProyectoWeb/wordpress/"

    }
}