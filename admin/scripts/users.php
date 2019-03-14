<?php 

    if (isset($_GET['allusers'])) {
        include('connect.php');
$id = $_GET['allusers'];
       
        $query = 'SELECT user_name, user_id from tbl_user WHERE user_id = '.$id.' UNION SELECT b.sub_user_name, b.sub_user_id from tbl_user a, tbl_sub_user b, tbl_sub_main c WHERE a.user_id = c.user_id AND c.sub_user_id = b.sub_user_id AND a.user_id = '.$id;
       
        $getAllUsers = $pdo->prepare($query);
        $getAllUsers->execute();

        $users = array();

        while($user = $getAllUsers->fetch(PDO::FETCH_ASSOC)) {
            $currentuser =  array();
            $currentuser['id'] = $user['user_id'];
            $currentuser['username'] = $user['user_name'];
     

            $users[] = $currentuser;
        }

        echo json_encode($users);
    }
?>