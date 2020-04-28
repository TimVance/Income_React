<?php

    include_once("db.php");

    function addItem($data) {
        if (!empty($data)) {

            $date = strtotime($data['date']);

            $db    = DataBase::getDB();
            $query = "INSERT INTO `income` (`id`, `sum`, `comment`, `date`, `category`) VALUES (NULL, {?}, {?}, {?}, {?})";
            return $db->query($query, array($data['sum'], $data['comment'], $date, $data['cat']));
        }
    }

    //addItem();

    function selectAll() {
        $db = DataBase::getDB();
        $query = "SELECT i.`id` AS id, i.`sum` AS sum, i.`comment` AS comment, i.`date` AS date, c.`name` AS category FROM `income` AS i RIGHT JOIN `category`AS c ON i.`category`=c.`id`";

        if (empty($_GET["month"])) $month = date("m", time());
        else $month = $_GET["month"];

        if (empty($_GET["year"])) $year = date("Y", time());
        else $year = $_GET["year"];

        $first_day = strtotime('1-'.intval($month).'-'.intval($year));
        $last_day = strtotime(date('t', strtotime('1-'.intval($month).'-'.intval($year))).'-'.intval($month).'-'.intval($year));

        $query .= ' WHERE i.`date` BETWEEN {?} AND {?}';
        $query .= ' ORDER BY i.`date`';
        return $db->select($query, array($first_day, $last_day));
    }

    function selectCategoryes() {
        $db = DataBase::getDB();
        $query = "SELECT * FROM `category` WHERE {?}";
        return $db->select($query, array("1"));
    }

    function changeKeys($category) {
        $cats = [];
        foreach ($category as $cat) {
            $cats[$cat["id"]] = $cat["name"];
        }
        return $cats;
    }

    //$rows = selectAll();
    //$category = selectCategoryes();

//    if (!empty($category)) {
//        $cats = changeKeys($category);
//        unset($category);
//    }

    //require_once("rows.php");