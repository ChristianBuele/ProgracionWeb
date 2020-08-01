var formularios=document.getElementById('formularioReg');
var respuesta=document.getElementById('respuesta');
formularios.addEventListener('submit',function(e)
{
   e.preventDefault();
   //detecto lo campos escritos
   var datos=new FormData(formularios)
   fetch('php/post.php',{
        method:'POST',
        body:datos
   })
   .then(res => res.json())
   .then(data => {

       if(data==='error'){
            respuesta.innerHTML=`
            <div class="alert alert-danger" role="alert">
                   Datos incorrectos               
            </div>
            
            `
       }else{
        respuesta.innerHTML=`
        <div class="alert alert-primary" role="alert">
              ${data}            
        </div>
        
        `
       } 
   }).catch(function() {
     alert("Can't connect to backend try latter");
   });
       
}
);