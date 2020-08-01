<?php

 $correo= $_POST['correoUsuario'];
 $contra=$_POST['contraUsuario'];
include ("BD.php");
$conn =new conexion;
$conexion=$conn->conectar();
$sql="SELECT contraseña as id from usuario where correo='$correo'";

$cadena=mysqli_query($conexion,$sql);//obtengo la clave del carrito para el nuevo usuario

$fila = mysqli_fetch_assoc($cadena);
if($fila==''){
    echo json_encode('error');
}else{
    $dato=$fila["id"];

    if( strcmp($contra, $dato) === 0){
        echo json_encode('Bienvenido '.$correo);
    }else{
        echo json_encode('error');
    }
}



