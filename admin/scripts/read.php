<?php 

    function getAll($tbl,$age){

        include('connect.php');
        if($age=="kid"){
            $queryAll = 'SELECT * FROM '.$tbl.' WHERE movies_rating = "kids"';
        }else{
            $queryAll = 'SELECT * FROM '.$tbl;
        }
      
        $runAll = $pdo->query($queryAll);

        $result = array();       

        while($row = $runAll->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;

        }
    

    function getSingle($tbl, $col, $value){

        include('connect.php');
        $querySingle = 'SELECT * FROM '.$tbl.' WHERE '.$col.' = '.$value;
        //var_dump($querySingle);
        $runSingle = $pdo->query($querySingle);
        if ($runSingle){
            return $runSingle;
        } else {

            $error = 'There was a problem';
            return $error;
        }
    }

    function filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter,$age) {
        include('connect.php');
        //TODO: write the SQL query to fetching everything 
        // from the linking tables $tbl, $tbl_2, $tbl_3
        if($age=="kid"){
        $filterQuery = 'SELECT * FROM ' .$tbl.' as a, ';
        $filterQuery.= $tbl2.' as b, ';
        $filterQuery.= $tbl3.' as c ';
        $filterQuery.= 'WHERE a.' .$col.' = c.'.$col;
        $filterQuery.= ' AND b.' .$col2.' = c.'.$col2;
        $filterQuery.= ' AND b.' .$col3.' = "'.$filter.'" AND movies_rating = "kids"';
        }else{
            $filterQuery = 'SELECT * FROM ' .$tbl.' as a, ';
            $filterQuery.= $tbl2.' as b, ';
            $filterQuery.= $tbl3.' as c ';
            $filterQuery.= 'WHERE a.' .$col.' = c.'.$col;
            $filterQuery.= ' AND b.' .$col2.' = c.'.$col2;
            $filterQuery.= ' AND b.' .$col3.' = "'.$filter.'"';
        }
        //echo $filterQuery; 
        //exit;
        $runQuery = $pdo->query($filterQuery);
        
        if($runQuery){

                $results = array();

                while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
                    $results[] = $row;
                }

                return $results;
        }

        else{
            $error = 'There was a problem';
            return $error;
        }
    }

?>