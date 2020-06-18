<?php
//include ("conectar.php");
$usuario = $_POST['correo'];
$contra= $_POST['password'];

if( $usuario ==='' || $contra===''){
    echo json_encode('error');

}else{
    echo json_encode('Correcto: <br>Usuario:'.$usuario.'<br> Pass:'.$contra);
        $user="root";
        $pass="1998";
        $server="localhost:81";
        $db="infinityproductions";
        $conn = new mysqli ($server,$user,$pass,"infinityproductions") ;
     
}