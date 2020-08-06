const m= localStorage.getItem("id_usuario")
    if(m===null){
        document.getElementById('config').setAttribute('href','#');
    }else{
        document.getElementById('config').setAttribute('href','perfil.html');
    }
const productos = [
    {nombre: 'Sesión Basica', valor: 30},
    {nombre: 'Sesión Estandar', valor: 50},
    {nombre: 'Sesión Profesional', valor: 80},
    {nombre: 'Evento Basico', valor: 100},
    {nombre: 'Evento Estandar', valor: 150},
    {nombre: 'Evento Profesional', valor: 200},
]
const partes = [
    {nombre: 'Inicio'},
    {nombre: 'Acerca de Nosotros'},
    {nombre: 'Tienda'},
    {nombre: 'Productos'},
]
const formulario=document.querySelector('#busca');
const resultado=document.querySelector('#busq');
const filtrar =()=>{
    resultado.innerHTML='';
    const texto=formulario.value.toLowerCase();
    for(let pro of productos){
        let nombre=pro.nombre.toLowerCase();
        if(nombre.indexOf(texto)!==-1){
            resultado.innerHTML += `
            <li><a href="sesiones.html" style="color: white;">${pro.nombre}- Valor: ${pro.valor}</a></li>
           `
        }
    }
    if(resultado.innerHTML===''){
        resultado.innerHTML += `
        <li><a href="" style="color: red">Valor No encontrado</a></li>
       `
    }
    if(texto===""){
        resultado.innerHTML ="";
    }
}
formulario.addEventListener('keyup',filtrar);





function cerrarSesion() {
    
    localStorage.removeItem('id_usuario')
  }
  
  function onSignIn(googleUser) { //cuando inicia sesion con google
    var boo=localStorage.getItem('id_usuario')
    if(boo===null){
      var profile = googleUser.getBasicProfile();
      
    }
  
  }
  function checkLoginState() {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  }
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
  function testAPI() {
    FB.api('/me', { locale: 'en_US', fields: 'id,email' }, function (response) {
      
    });
  
  }
  

  
  