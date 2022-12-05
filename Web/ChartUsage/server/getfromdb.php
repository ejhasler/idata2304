<?php

include $_SERVER['DOCUMENT_ROOT']."/Database/session.php";

$sql = "SELECT DISTINCT Time, kWh
        FROM UserData";
$sql = $sql.$_GET['q']."%'";

$query = mysqli_query($mysqli, $sql)
        or die (mysqli_error($mysqli));

$row = mysqli_fetch_array($query);

if ($row != false && $row != null){
    do {
        echo
          "<p>{$row['kWh']}</p>";
    } while ($row = mysqli_fetch_array($query));

    echo"</div>";
} else {
    echo "<p>No records found </p>";
}

$mysqli->close();

