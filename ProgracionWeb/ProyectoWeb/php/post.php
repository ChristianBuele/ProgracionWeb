<?php
//include ("conectar.php");
$usuario = $_POST['correo'];
$contra= $_POST['password'];

if( $usuario ==='' || $contra===''){
    echo json_encode('error');

}else{
    include ("conectar.php"); 
    OpenCon($usuario,$contra);
    echo json_encode('Correcto: <br>Usuario: <br> Pass:'.$contra);
}