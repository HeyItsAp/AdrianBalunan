<?php
    # Domeneshop connection
    # $dsn = "mysql:host=adrianpaullimp01.mysql.domeneshop.no;dbname=adrianpaullimp01;charset=utf8mb4";
    # $dbusername = "adrianpaullimp01";
    # $dbpassword = "user123";

    # Localhost connection
    $dsn = "mysql:host=localhost;dbname=adrianpaullimpia01;charset=utf8mb4";
    $dbusername = "root";
    $dbpassword = "Adri4321..";

    try {
        $pdo = new PDO($dsn, $dbusername, $dbpassword); 
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    } catch (PDOException $e){
        echo "Connection Error: " . $e->getMessage(); 
    }