<?php
    $pageName = 'Home';
    $folderName = 'home';

    include('./common/common.php');
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<section>
            <div class="introduction">
                <div id="intro_header">
                    <h2> About Naagin </h2>
                </div>
                <div id="intro_content">
                    Enjoy the classic Snake game for free. Register now to keep track of scores with your friends. 
                    <br>
                    There are different levels to challenge yourself. 
                    <br>
                    Happy Naagin.    
                </div>
            </div>
        </section>
        <section>
            <div class="main-content">
                <div class="playgame">
                    <div class="level">
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
                            <button type="submit">Play Game</button>
                        </div>
                    </div>
                </div>
                <!-- Carousel -->
                <div class="carousel-container">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block" src="../common/img/js-snake.png" width="450"  alt="First slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block" src="../common/img/apple-snake.png"  width="450" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block" src="../common/img/snakeitup.png"  width="450"  alt="Third slide">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="./home/img/register.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Registration</h5>
                    <p class="card-text">Want to burn some steam off? Register for free to enjoy Naagin</p>
                  </div>
                  <div class="card-footer card-btn">
                    <button onclick="location.href = '../register/register.php';" >Register</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="./home/img/rankboard.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Rank Board</h5>
                    <p class="card-text">Want to beat your friends' high score? Compare their high score with yours to challenge yourself.</p>
                  </div>
                  <div class="card-footer">
                    <button onclick="location.href = '../rankboard/rankboard.php';">Leader Board</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="./home/img/help.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">How to Play</h5>
                    <p class="card-text">Don't know how to play? Click on the 'How to Play' button to find out more.</p>
                  </div>
                  <div class="card-footer">
                    <button onclick="location.href = '../howtoplay/howtoplay.php';">How to Play</button>
                  </div>
                </div>
            </div>
        </section>
<?php
    generateFooter($pageName);
?>