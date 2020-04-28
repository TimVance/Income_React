<?php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

include_once "./lib/ajax.php";

$rows["items"] = selectAll();

$rows["sum"] = 0;
$rows["count"] = 0;

foreach ($rows["items"] as $i => $row) {
    $rows["items"][$i]["date"] = date("j", $row["date"]);
    $rows["items"][$i]["sum"] = number_format($row["sum"], "0", "", " ");
    $rows["sum"] += $row["sum"];
    $rows["count"]++;
}

$rows["sum"] = number_format($rows["sum"], "0", "", " ");

echo json_encode($rows);