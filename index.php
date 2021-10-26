<!DOCTYPE html>

<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">

        <!-- Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        <!-- External CSS -->
        <link href="./css/styles.css" type="text/css" rel="stylesheet">
        <link href="../common/css/styles.css" type="text/css" rel="stylesheet">
        
        <!-- icon CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

        <!-- Tab icon-->
        <link href="../common/img/AC.png" rel="icon">

        <!-- Tab title-->
        <title>Naagin: Home </title>

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
    </body>
    <footer >
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/keshav.culloo" target="_blank" role="button">
                    <i class="fa fa-facebook icon"></i>
                </a>

                <!-- Instagram -->
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/keshav.culloo/" target="_blank" role="button">
                    <i class="fa fa-instagram icon"></i>
                </a>

                <!-- Linkedin -->
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/culloo-avinesh-46b3b71b6/" target="_blank" role="button">
                    <i class="fa fa-linkedin icon"></i>
                </a>

                <!-- Github  -->
                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/avinesh1906" target="_blank" role="button">
                    <i class="fa fa-github icon"></i>
                </a>
            </section>
            <!-- Section: Social media -->

        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2021 Copyright: Avinesh Culloo
        </div>
        <!-- Copyright -->
    </footer>
</html>