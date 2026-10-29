<?php
if (!defined('YG_APP')) define('YG_APP', true);

return [
    'host' => 'localhost',
    'port' => 3306,
    'database' => 'yghingcom_dbuser',
    'user' => 'yghingcom',
    'password' => 'PmbrvF3@KqCtVsv',
    'charset' => 'utf8mb4',
    'options' => [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_TIMEOUT => 5,
    ]
];
