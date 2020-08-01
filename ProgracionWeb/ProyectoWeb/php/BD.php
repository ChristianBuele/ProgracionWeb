<?php
class conexion{
    private $conn;
    function conectar(){
        $servidor = "127.0.0.1"; // El servidor que utilizaremos, en este caso será el localhost 
        $usuario = "christian"; // El usuario que acabamos de crear en la base de datos 
        $contrasenha = "1998"; // La contraseña del usuario que utilizaremos 
        $BD = "infinityproductions"; // El nombre de la base de datos 
        $conn = new mysqli($servidor, $usuario, $contrasenha,$BD) ;
     

        return $conn;
    }

}