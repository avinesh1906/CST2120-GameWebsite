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
<section class="options" id="level_radio">
    Choose your level:
    <br>
    <input type="radio" id="beginner" name="game_option" value="beginner" checked="checked"> 
    <label for="beginner">Beginner </label><br>
    <input type="radio" id="normal" name="game_option" value="normal"> 
    <label for="normal">Normal </label><br>
    <input type="radio" id="time-attack" name="game_option" value="time-attack"> 
    <label for="time-attack">Time Attack </label>
    <!-- Playgame footer to display button -->
    <div class="playgame_footer">
        <button type="submit" id="play_btn">Play Game</button>
    </div>
</section>
<div class="Game">
    <div class="menu">
    
    </div>
    <canvas class="game-window">
        Game Window
    </canvas>
    <div class="score" id="score_Details">
        Score
        <div id="score_num">
            0
        </div>
    </div> 
</div>
<?php
    // php function to generate the footer
    generateFooter($pageName);
    generateJavaScript($pageName);
?>