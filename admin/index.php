<?php 

    require_once('../admin/scripts/config.php');

    if (isset($_GET['media'])) {
        $type = $_GET['media'];

        if ($type == "video") {
            $tbl = "tbl_movies";
        } else {
            $tbl = "tbl_audio";
        }
    }

    if(isset($_GET['filter'])){

        $tbl = 'tbl_movies';
        $tbl2 = 'tbl_genre';
        $tbl3 = 'tbl_mov_genre';
        $col = 'movies_id';
        $col2 = 'genre_id';
        $col3 = 'genre_name';
        $filter = $_GET['filter'];

        $results = filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter);
        
        echo json_encode($results);

    } else {
$tbl = "tbl_user";
        $results = getAll($tbl);

        echo json_encode($results);
    }
?>