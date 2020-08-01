function onSignIn(googleUser) { //cuando inicia sesion con google
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  update_user_data(profile);
}

function update_user_data(profile) {
  var apiUrl = "http://localhost:8082/api/producto/usuario/"
  var datosUsuario = {
    nombre_usuario: profile.getName(),
    apellido_usuario: profile.getName(),
    correo_usuario: profile.getEmail(),
    contraseria_usuario: profile.getId(),
    rol: 'usuario'
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
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



}
///facebook
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else if (response.status === 'not_authorized') {
    alert('Usuario no autorizado')
  } else {
    alert('A ocurrido un error, recargue la pagina'); _
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
  });
}

//facebook
/*
window.fbAsyncInit = function () {
  FB.init({
    appId: '2899175583499642',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v7.0'
  });
};

FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
  statusChangeCallback(response);        // Returns the login status.
});


function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('si entrasssss');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    getFbUserData();
    //testAPI();


  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fbLogin() {
  FB.login(function (response) {
    if (response.authResponse) {
      // Get and display the user profile data
      getFbUserData();
    }
  }, { scope: 'email' });
}

function getFbUserData(){
  FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
  function (response) {
     // document.getElementById('fbLink').setAttribute("onclick","fbLogout()");
     // document.getElementById('fbLink').innerHTML = 'Logout from Facebook';
      //document.getElementById('status').innerHTML = '<p>Thanks for logging in, ' + response.first_name + '!</p>';
    //  document.getElementById('userData').innerHTML = '<h2>Facebook Profile Details</h2><p><img src="'+response.picture.data.url+'"/></p><p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p><p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">click to view profile</a></p>';
  saveUserData(response)
  });
}
function saveUserData(response){
  console.log('los datos de facebook son')
  console.log(response.first_name)
  console.log(response.email)
}

function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {   // See the onlogin handler
    statusChangeCallback(response);
  });



/*






function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}





function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', 'get', { fields: 'first_name,last_name,name,id' }, function (response) {
    console.log('Successful login for: ' + response.);
    getInfo()
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
function getInfo() {
  FB.api('/me', 'GET', { fields: 'name,email' }, function (response) {
    console.log('nombre ' + name)
    console.log('correo ' + email)
  });
}
*/
