<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include('conexion.php');

    try{

        $sql = 'SELECT * FROM clase';

        $stmt = $db->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        echo json_encode($result, JSON_PRETTY_PRINT);
        
    }catch(Exception $e){
        echo $e;
    }
    
?>