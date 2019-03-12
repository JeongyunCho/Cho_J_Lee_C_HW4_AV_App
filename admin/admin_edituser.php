<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="../css/main.css">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<title>Roku Create User Page</title>
</head>
<body>

            <!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container">
          <a id="headName" class="navbar-brand">ROKU FLASHBACK</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="../home.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../parent.html">Parents</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../kids.html">Kids</a>
              </li>
            </ul>
          </div>
        </div>
</nav>
   
    <div class="login-page">
        
        <h3>WELCOME!!</h3>
        
        <div class="form">
        
        <P id="logTitle">ROKU EDIT USER</P>
         
        <form action="login.html" class="login-form" method="post">
            <label for="fname" class="hide">Firstname:</label>
            <input type="text" placeholder="fname"/>
            <label for="username" class="hide">Username</label>
            <input type="text" placeholder="username"/>
            <label for="password" class="hide">Password</label>
            <input type="password" placeholder="password"/>
            <label for="email" class="hide">Email</label>
            <input type="text" placeholder="email"/>
            <button type="submit">Edit User</button>
           
            
        </form>
        
        </div>
      
    </div>



    
      
</body>
</html>