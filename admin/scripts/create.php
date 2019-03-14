<?php 
    function createUser($fname,$username,$password,$email,$birth){
        include('connect.php');


        $create_user_query = 'INSERT INTO tbl_user(user_fname, user_name,user_pass,user_email,user_bdate)';
        $create_user_query .= ' VALUES(:fname,:username,:password,:email,:birth)';

        $create_user_set = $pdo->prepare($create_user_query);
        $create_user_set->execute(
            array(
                ':fname'=>$fname,
                ':username'=>$username,
                ':password'=>$password,
                ':email'=>$email,
                ':birth'=>$birth
            )
        );

        if($create_user_set->rowCount()){
          $message = 'User Created';
          return $message;
        }else{
          $message = 'User Create Failed';
          return $message;
        }

    }