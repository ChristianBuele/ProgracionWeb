iniciar();

function iniciar(){
    const m= localStorage.getItem("id_usuario")
    if(m===null){
        console.log('no hay usuario')
        alert('Sugerimos registrarse o iniciar sesion en el sistema')
    }else{
        alert('Bienvenido de nuevo')
    }
   
}


