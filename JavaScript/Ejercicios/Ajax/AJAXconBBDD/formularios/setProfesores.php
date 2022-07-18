<?php

$HOST="localhost";
$USER="root";
$PASS="";
$DB="academia";

$conexion = new mysqli($HOST,$USER,$PASS,$DB);

if($conexion->connect_errno){
    echo "Fallor: ".$conexion->connect_error;
    exit();
}

$consulta = "INSERT INTO profesores (nombre, dni) VALUES ('Alejandro','74234231F')";
$resultado=$conexion->query($consulta);


if($resultado){
    echo "ERROR insertando valores.";
    
}
else{
    echo "Valores insertados correctamente.";
}


?>