<?php
    // php variables
    $pageName = 'Log In';
    $folderName = 'login';

    // include the common.php file
    include('../common/common.php');
    
    // functions call
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- The login class -->
<div class="login_container">
    <!-- Login container header -->
    <div class="login_container_header">
        <h2>Sign In</h2>
    </div>
    <!-- Login form -->
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
    <!-- Login submit button -->
    <div class="login_btn">
        <a href="../home/home.html">
            <img class="login_image" src="./img/login.png" alt="login" width="90">
        </a>
    </div>
    <!-- Option to create account -->
    <div class="login_footer">
        <a href="../register/register.php">Create Account?</a>
    </div>
</div>

<!-- Side picture container -->
<div class="side_picture-container">
    <img class="side_picture" src="./img/side_picture.gif" alt="side_picture" > 
</div>

<!-- Php function to generate the footer -->
<?php
    // function call
    generateFooter($pageName);
?>