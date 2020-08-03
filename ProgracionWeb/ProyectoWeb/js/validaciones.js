if(typeof(localStorage) !== "undefined"){
    console.log(typeof(localStorage))
verficar()
}else{
    alert("no existe el local storage")
}
function verficar(){
    console.log("verificando sesion "+localStorage.getItem("id_usuario"))
    if(localStorage.getItem("id_usuario")!==localStorage.getItem("id_usuario") ){
        if(localStorage.getItem("id_usuario")!=="-1"){
            console.log('Bienvenido '+localStorage.getItem("id_usuario"))
        }else{
            console.log("mal benido "+localStorage.getItem("id_usuario"))
        }
       
    }else{
        console.log('malvenido')
        //location.href = "http://localhost:81/pro/ProgracionWeb/ProyectoWeb/login.html"
    }
}