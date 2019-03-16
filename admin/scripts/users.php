<?php 

    if (isset($_GET['allusers'])) {
        include('connect.php');
$id = $_GET['allusers'];
       
        $query = 'SELECT user_name, user_id, user_agedays, user_grade from tbl_user WHERE user_id = '.$id.' UNION SELECT b.sub_user_name, b.sub_user_id, b.sub_user_agedays, b.sub_user_grade from tbl_user a, tbl_sub_user b, tbl_sub_main c WHERE a.user_id = c.user_id AND c.sub_user_id = b.sub_user_id AND a.user_id = '.$id;
       
        $getAllUsers = $pdo->prepare($query);
        $getAllUsers->execute();

        $users = array();

        while($user = $getAllUsers->fetch(PDO::FETCH_ASSOC)) {
            $currentuser =  array();
            $currentuser['id'] = $user['user_id'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['agedays'] = $user['user_agedays'];
            $currentuser['grade'] = $user['user_grade'];
            $users[] = $currentuser;
        }

        echo json_encode($users);
    }

    if (isset($_GET['mainuser'])) {
        include('connect.php');
        $id = $_GET['mainuser'];
       
        $query = 'SELECT * FROM tbl_user WHERE user_id = :id';
       
        $getMainUser = $pdo->prepare($query);
        $getMainUser->execute(
            array(
                ':id'=>$id
            )
        );
        
        $currentuser =  array();
        while($user = $getMainUser->fetch(PDO::FETCH_ASSOC)) {
            
            $currentuser['userfname'] = $user['user_fname'];
            $currentuser['email'] = $user['user_email'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['pass'] = $user['user_pass'];
      
        }

        echo json_encode($currentuser);
    }
    

    if (isset($_GET['subuser'])) {
        include('connect.php');
        $id = $_GET['subuser'];
       
        $query = 'SELECT * FROM tbl_sub_user WHERE sub_user_id = :id';
       
        $getSubUser = $pdo->prepare($query);
        $getSubUser->execute(
            array(
                ':id'=>$id
            )
        );
        $currentuser =  array();
        while($user = $getSubUser->fetch(PDO::FETCH_ASSOC)) {
        
            $currentuser['username'] = $user['sub_user_name'];
            $currentuser['bdate'] = $user['sub_user_bdate'];
  
        }

        echo json_encode($currentuser);
    }
?>