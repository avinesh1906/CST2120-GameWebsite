<?php
    // php variables
    $pageName = 'Home';
    $folderName = 'home';

    // include the common.php which contains the php functions
    include('./common/common.php');

    // call the php functions 
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- section: Introduction  -->
<section>
  <div class="introduction">
    <!-- Introduction Header -->
    <div id="intro_header">
      <h2> About Naagin </h2>
    </div>
    <!-- Introduction content -->
    <div id="intro_content">
        Chase after the apples but don't hit the wall, or eat your own tail. How long can you survive?  
        <br>
        Eat and grow! Slither to the top of the leaderboard.
        <br>
        🐍 Hiissssss 🐍   
    </div>
  </div>
</section>
<!-- Section End: Introduction  -->

<!-- section: Main content  -->
<section>
  <div class="main-content">
    <!-- Section: playgame -->
    <div class="playgame">
      <!-- Playgame header -->
      <div class="playgame_header">
        <h3> Choose your difficulty level: </h3>
      </div>
      <!-- Options to choose level -->
      <form class="options">
        <input type="radio" id="beginner" name="game_option" value="beginner" checked="checked"> 
        <label for="beginner">Beginner </label><br>
        <input type="radio" id="normal" name="game_option" value="normal"> 
        <label for="normal">Normal </label><br>
        <input type="radio" id="time-attack" name="game_option" value="time-attack"> 
        <label for="time-attack">Time Attack </label>
      </form>
      <!-- Playgame footer to display button -->
      <div class="playgame_footer">
          <button type="submit">Play Game</button>
      </div>
    </div>
    <!-- Carousel -->
    <div class="carousel-container">
      <div id="carouselIndicators" class="carousel-container carousel slide " data-ride="carousel">
        <!-- Display the carousel indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <!-- Carousel images to display -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./common/img/apple-snake.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./common/img/apple-snake.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./common/img/apple-snake.png" alt="Third slide">
          </div>
        </div>
        <!-- Previous button for carousel -->
        <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <!-- Next button for carousel -->
        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</section>
<!-- End section: Main content  -->

<!-- Card deck section -->
<section>
  <div class="card-deck">

    <!-- Card: Registration -->
    <div class="card">
      <!-- Registration card logo -->
      <img class="card-img-top" src="./home/img/registration.png" alt="Registration logo">
      <!-- Registration card title and text -->
      <div class="card-body">
        <h5 class="card-title">Registration</h5>
        <p class="card-text">Had a stressful day? Want to burn some steam off? Register for free to enjoy Naagin</p>
      </div>
      <!-- Registration card button -->
      <div class="card-footer card-btn">
        <button onclick="location.href = './register/register.php';" >Register</button>
      </div>
    </div>

    <!-- Card: Leaderboard -->
    <div class="card">
      <!-- Leaderboard card image -->
      <img class="card-img-top" src="./home/img/rankings.png" alt="Leaderboard image">
      <!-- Leaderboard card title and text -->
      <div class="card-body">
        <h5 class="card-title">Rank Board</h5>
        <p class="card-text">Want to beat your friends' high score? Compare their high score with yours to challenge yourself.</p>
      </div>
      <!-- Leaderboard card button -->
      <div class="card-footer">
        <button onclick="location.href = './rankboard/rankboard.php';">Leader Board</button>
      </div>
    </div>

    <!-- Card: How to play -->
    <div class="card">
      <!-- How to play card image -->
      <img class="card-img-top" src="./home/img/help.png" alt="How to play image">
      <!-- How to play card title and text -->
      <div class="card-body">
        <h5 class="card-title">Support </h5>
        <p class="card-text">Don't know how to play? Want more information? Click on the 'Learn More' button to find out more.</p>
      </div>
      <!-- How to play card button -->
      <div class="card-footer">
        <button onclick="location.href = './howtoplay/howtoplay.php';">Learn More</button>
      </div>
    </div>

  </div>
</section>

<!-- End of card section -->
<?php
    // php function to generate the footer
    generateFooter($pageName);
?>