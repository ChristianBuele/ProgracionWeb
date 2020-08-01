<?php
$servidor = "localhost"; // El servidor que utilizaremos, en este caso será el localhost 
$usuario = "christian"; // El usuario que acabamos de crear en la base de datos 
$contrasenha = "1998"; // La contraseña del usuario que utilizaremos 
$BD = "infinityproductions"; // El nombre de la base de datos 

$conn = new mysqli("127.0.0.1", $usuario, $contrasenha,$BD) ;
if(!$conn){
    echo 'conecction error : '.mysqli_connect_error();
}else{
    
    $sql = "INSERT INTO `usuarios` VALUES ('matias', 'buele', 'thom..com','dsds')";
//$sql='SELECT nombre FROM usuarios';
$result=mysqli_query($conn,$sql);
if($result){
    echo 'datos ingresador';
}else{
    echo 'datos no ingresados';
}
}
?>

<!DOCTYPE html>
<html>

</html>