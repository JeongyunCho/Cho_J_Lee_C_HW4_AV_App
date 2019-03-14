<?php 
	require_once('config.php');
    
        $fname = trim($_POST['firstname']);
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
		$email = trim($_POST['email']);
		$birth = trim($_POST['birth']);
        
        //Validation
     
        if (isset($_GET['sub'])) {
            if(empty($username) || empty($birth)){
                $result = 'Please fill the required fields!';
            }else{
                $c_id = $_GET['sub'];
                $tbl = "tbl_sub_user";
                $result = createUser($tbl,null,$username,null,null,$birth,$c_id);
            }
    
        }else{
            if(empty($username) || empty($password)|| empty($fname)|| empty($email) || empty($birth)){
                $result = 'Please fill the required fields!';
            }else{
            $tbl = "tbl_user";
         $result = createUser($tbl,$fname,$username,$password,$email,$birth,null);
            }
        }
    	echo json_encode($result);

?>
