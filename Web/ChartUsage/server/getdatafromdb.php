<?php

header('Content-Type: application/json');

include $_SERVER['DOCUMENT_ROOT'] . "/Database/db.php";

$req = "SELECT Time, kWh
        FROM UserData
        WHERE DataID =";
$req = $req . $_GET['q'] . " ORDER BY UNIX_TIMESTAMP(Time) ASC";

$query = sprintf($req);

$result = $mysqli->query($query);

$data = array();

foreach ($result as row) $data[] = $row;

$result->close();

$mysqli->close();

print json_encode($data);