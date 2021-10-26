
<!DOCTYPE html>

<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">

        <!-- External CSS -->
        <link href="./css/styles.css" type="text/css" rel="stylesheet">
        <link href="../common/css/styles.css" type="text/css" rel="stylesheet">
        
        <!-- icon CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

        <!-- Tab icon-->
        <link href="../common/img/AC.png" rel="icon">

        <!-- Tab title-->
        <title>Naagin: Login </title>

    </head>

    <body>
        <!-- Navigation Bar-->
        <nav class="navbar sticky-top">
            <!-- Navigation Icon-->
            <a class="navbar-brand">
                <img src="../common/img/AC.png"  width="50" height="50" alt="navigation bar icon">
                <span>Naagin</span>
            </a>
            <div class="navigation-container ">
                <ul class="navbar-item">
                    <li class="nav-item">
                        <a class="nav-link " href="../home/home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../rankboard/rankboard.html">Rank Board</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="../login/login.html">Log In</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../setting/setting.html">Setting</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../register/register.html">Register</a>
                    </li>                    
                </ul>
            </div>
        </nav>
        <div class="main-content">
            <!-- The login class -->
            <div class="login_container">
                <div class="login_container_header">
                    <h2>Sign In</h2>
                </div>
                <div class="login_form ">
                    <form>
                        <div class="username">
                            <i class="fa fa-user icon"></i>
                            <label for="Username" class="form-label">Username</label>
                            <input autocomplete="off" type="text" class="form-control" id="Username">
                            </div>
                        <div class="password">
                            <i class="fa fa-key icon"></i>
                            <label for="Password" class="form-label">Password</label>
                            <input  autocomplete="off" type="password" class="form-control" id="Password" >
                        </div>
                    </form>
                </div>
                <div class="login_btn">
                    <a href="../home/home.html">
                        <img class="login_image" src="./img/login.png" alt="login" width="90">
                    </a>
                </div>
                <div class="login_footer">
                    <a href="../register/register.html">Create Account?</a>
                </div>
            </div>
            <div class="side_picture-container">
                <img class="side_picture" src="./img/side_picture.gif" alt="side_picture" > 
            </div>
        </div>
<?php
    include('../common/common.php');
    generateFooter();

?>