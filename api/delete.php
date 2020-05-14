<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

include_once "./lib/ajax.php";

delete(get_object_vars(json_decode($_POST["form"])));


echo json_encode('success');