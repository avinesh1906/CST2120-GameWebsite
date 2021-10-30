<?php
    $pageName = 'Home';
    $folderName = 'home';

    include('./common/common.php');
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<div class="introduction">
    <div id="intro_header">
        <h2> About Naagin </h2>
    </div>
    <div class="intro_content">
        <p>
            Enjoy the classic Snake game for free. Register now to keep track of scores with your friends. 
            There are different levels to challenge yourself. Happy Naagin.
        </p>    
    </div>
<div>
<div class="main-content">
    <div class="playgame">
        <div class="playgame_header">
            <h3> Choose your difficulty level: </h3>
        </div>
        <form class="options">
            <input type="radio" id="beginner" name="game_option" value="beginner" checked="checked"> 
            <label for="beginner">Beginner </label><br>
            <input type="radio" id="normal" name="game_option" value="normal"> 
            <label for="normal">Normal </label><br>
            <input type="radio" id="time-attack" name="game_option" value="time-attack"> 
            <label for="time-attack">Time Attack </label>
        </form>
        <div class="playgame_footer">
            <div class="playgame_btn">
                <button type="submit">Play Game</button>
            </div>
            <div class="playgame_option">
                <a href="../howtoplay/howtoplay.php">How to Play?</a>
            </div>
        </div>
        <!-- Carousel -->
        <div class="carousel-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block" src="./common/img/js-snake.png" width="450"  alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block" src="./common/img/apple-snake.png"  width="450" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block" src="./common/img/snakeitup.png"  width="450"  alt="Third slide">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
    generateFooter($pageName);
?>