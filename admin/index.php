<?php 

    require_once('../admin/scripts/config.php');

    if (isset($_GET['media'])) {
        $type = $_GET['media'];

        if ($type == "video") {
            $tbl = "tbl_movies";
        } 
    }
    if (isset($_GET['age'])) {
        $age = $_GET['age'];

    }

    if(isset($_GET['filter'])){

        $tbl = 'tbl_movies';
        $tbl2 = 'tbl_genre';
        $tbl3 = 'tbl_mov_genre';
        $col = 'movies_id';
        $col2 = 'genre_id';
        $col3 = 'genre_name';
        $filter = $_GET['filter'];

        if($_GET['filter']=="null"){
            $results = getAll($tbl,$age);
        }else{
            $results = filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter,$age);
        }
        echo json_encode($results);

    } else {
   
        $results = getAll($tbl,$age);
        echo json_encode($results);
    }
?>