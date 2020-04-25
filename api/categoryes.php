<?php


header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');

include_once "./lib/ajax.php";

$rows["categoryes"] = selectCategoryes();

echo json_encode($rows);