<?php

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