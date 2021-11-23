<?php
    // php variables
    $pageName = 'Game';
    $folderName = 'game';

    // include the common.php which contains the php functions
    include('../common/common.php');

    // call the php functions 
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>
<div id="notLoggedIn">
    <div class="title">
        Login Required
        <br>
        Create an account or login to enjoy Naagin for free.
    </div>
    <div class="button">
        <div id="signin_btn">
            <button onclick="window.location.href='../login/login.php'">Log In</button>
        </div> 
        <div id="register_btn">
            <button  onclick='window.location.href="../register/register.php"'>Register</button>
        </div> 
    </div>
</div>
<!-- Game Window -->
<div class="game-window">
    Game Window
</div>
<?php
    // php function to generate the footer
    generateFooter($pageName);
    generateJavaScript($pageName);
?>