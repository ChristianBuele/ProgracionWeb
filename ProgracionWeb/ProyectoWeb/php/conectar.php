<?php
class conexion{
    function conectar(){
        $user="root";
        $pass="1998";
        $server="localhost";
        $db="infinityproductions";
        $con=mysql_connect($server,$user,$pass,"infinityproductions") ;
       if($con->connet_error){
            die($conn->connet_error);
       }else{
           print "conecxion exitosa\n";
       }
       exit(1);
    }
}
