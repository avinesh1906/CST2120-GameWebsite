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
    <div class="score" id="score_Details">
        Score
        <div id="score_num">
            0
        </div>
    </div> 
    <div class="countdown_class">
        <!-- Left side Gif -->
        <div class="left_side_picture">
            <img class="side_picture" src="../common/img/serpent.gif" width="250" alt="side_picture" >
        </div>
        <div class="counter_body">
            Naagin Starting In:
            <div id="counter_num">
                3
            </div>
        </div>
        <!-- Right side Gif -->
        <div class="right_side_picture">
            <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
        </div>
    </div>
    <div class="game_div">
        <canvas class="game-window">
        </canvas>
    </div>
    <div class="menu">
        <button id="pause_btn">Pause</button>
        <button id="restart_btn">Restart</button>
        <button id="level_change">Change Level</button>
        <button id="quit">Quit</button>
    </div>
</div>
<?php
    // php function to generate the footer
    generateFooter($pageName);
    generateJavaScript($pageName);
?>