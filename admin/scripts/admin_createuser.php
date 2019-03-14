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
        }else{
            //Create User 
            $result = createUser($fname,$username,$password,$email,$birth);
        }
    	echo json_encode($result);

?>
