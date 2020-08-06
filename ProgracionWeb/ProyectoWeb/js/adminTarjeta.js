var xxx= localStorage.getItem('id_usuario')
    if(jaja===null){//si es que no hay usuario
        location.href="index.html"
    }else{
        document.getElementById('idUser').setAttribute('value',xxx);
    }
       
    