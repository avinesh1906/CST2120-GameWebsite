<?php
    include('./common/common.php');
    generateHeader('Home');
?>

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
                        <a class="nav-link active" href="../home/home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../rankboard/rankboard.html">Rank Board</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="../login/login.html">Log In</a>
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
                        <a href="../howtoplay/howtoplay.html">How to Play?</a>
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
<?php
    generateFooter();
?>