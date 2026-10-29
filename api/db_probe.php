<?php
header('Content-Type: application/json');

$user = 'yghingcom_dbuser';
$pass = '123Yg!@#';

$results = [
    'connected' => false,
    'databases' => [],
    'error' => null,
];

try {
    $pdo = new PDO("mysql:host=localhost;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_TIMEOUT => 5,
    ]);
    $results['connected'] = true;
    
    $stmt = $pdo->query("SHOW DATABASES");
    $dbs = $stmt->fetchAll(PDO::FETCH_COLUMN);
    $results['databases'] = $dbs;
} catch (Exception $e) {
    $results['error'] = $e->getMessage();
}

echo json_encode($results, JSON_PRETTY_PRINT);
