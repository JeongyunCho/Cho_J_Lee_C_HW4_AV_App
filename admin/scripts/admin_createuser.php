<?php 
	require_once('config.php');
    
        $fname = trim($_POST['firstname']);
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
		$email = trim($_POST['email']);
		$birth = trim($_POST['birth']);
        
        //Validation
        if(empty($username) || empty($password)|| empty($fname)|| empty($email) || empty($birth)){
            $result = 'Please fill the required fields!';
        }else if (isset($_GET['sub'])) {
            $tbl = "tbl_sub_user";
            $result = createUser($tbl,$fname,$username,$password,$email,$birth);
        }else{
            //Create User 
            $tbl = "tbl_user";
         $result = createUser($tbl,$fname,$username,$password,$email,$birth);
        }
    	echo json_encode($result);

?>
