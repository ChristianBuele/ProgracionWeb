<?php


$usuario = $_POST['nombreUsuario'];
 $apellido= $_POST['apellidoUsuario'];
 $correo= $_POST['correoUsuario'];
 $contra=$_POST['contraUsuario'];
include ("BD.php");
$conn =new conexion;
$conexion=$conn->conectar();
$myCrud= new crud;
$myCrud->agregarUsuario($conexion,$usuario,$apellido,$correo,$contra);

class crud{
 

    function agregarUsuario($conn,$usuario,$apellido,$correo,$contra){
        
        if( $usuario ==='' || $apellido==='' || $correo==='' || $contra===''){
            echo json_encode('error');
        }else{
            //carrito 
            $sql1="insert into carrito (`total`) values ('0')" ;
            $result=mysqli_query($conn,$sql1);

            //obtendo dato del carrito creado
            $carritos="SELECT MAX(id_carrito) as id FROM carrito";
            $cadena=mysqli_query($conn,$carritos);//obtengo la clave del carrito para el nuevo usuario
            $fila = mysqli_fetch_assoc($cadena);
            $dato=$fila["id"];
           

            //usuario
            $sql = "insert into usuario (`id_carrito`,`nombre`,`apellido`,`correo`,`contraseña`,`rol`) values ('$dato','$usuario','$apellido','$correo','$contra','usuario')";
            $result2=mysqli_query($conn,$sql);
            echo json_encode('Bienvenido:'.$usuario);
        }
        
    }
    function actualizrUsuario(){

    }
    function eliminarUsuario(){

    }
    function leer(){
        
    }
    
}
