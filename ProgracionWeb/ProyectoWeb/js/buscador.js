
console.log("entra al busdor")
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




function onSignIn(googleUser) { //cuando inicia sesion con google
    var profile = googleUser.getBasicProfile();
    
  }
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        
      console.log('User signed out.');
    });
    
    FB.logout(function(response) {
        console.log('Log Out Facebook')
      });
      localStorage.setItem("id_usuario",-1)
  }