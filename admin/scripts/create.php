<?php 
    function createUser($tbl,$fname,$username,$password,$email,$birth,$c_id){
        include('connect.php');
 
        if($tbl=="tbl_sub_user"){
        

          $create_user_query = 'INSERT INTO '.$tbl.'(sub_user_name, sub_user_bdate, sub_user_agedays)';
          $create_user_query .= ' VALUES(:username, :birth,TO_DAYS(NOW())-TO_DAYS("'.$birth.'"))';
          $create_user_set = $pdo->prepare($create_user_query);
          $create_user_set->execute(
            
              array(
                  ':username'=>$username,
                  ':birth'=>$birth
              )
          );
        }else{
          $create_user_query = 'INSERT INTO '.$tbl.'(user_fname, user_name,user_pass,user_email,user_bdate, user_agedays)';
          $create_user_query .= ' VALUES(:fname,:username,:password,:email,:birth,TO_DAYS(NOW())-TO_DAYS("'.$birth.'"))';
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
        }
     
        if($tbl=="tbl_sub_user"){
          $last_id = $pdo->lastInsertID();
         
          $add_sub_main = 'INSERT INTO tbl_sub_main(sub_user_id, user_id)';
          $add_sub_main .= ' VALUES(:sub_user_id,:user_id)';
      
          $add_sub_main_set = $pdo->prepare($add_sub_main);
          $add_sub_main_set->execute(
            array(
                      ':sub_user_id'=>$last_id, 
                      ':user_id'=>$c_id
            )
              );
        }
     

        if($create_user_set->rowCount()){
          $message = 'User Created';
          return $message;
        }else{
          $message = 'User Create Failed';
          return $message;
        }

    }