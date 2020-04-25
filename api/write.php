<?php

header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
//include_once "./lib/ajax.php";

//addItem();



$res[] = $_REQUEST;
$res[] = array("test", "test2");

echo json_encode($res);