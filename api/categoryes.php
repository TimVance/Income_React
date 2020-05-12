<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

include_once "./lib/ajax.php";

$rows["categoryes"] = selectCategoryes();

echo json_encode($rows);
exit();