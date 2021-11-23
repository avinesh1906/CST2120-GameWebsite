<?php

// Outputs the header for the page and opening body tag
// $title: will be the page title to be shown in the head
// $directoryname: will be the directory containing the css and other related files 
function generateHeader($title, $directoryname){
echo '<!DOCTYPE html>';
echo '<html>';
echo '<!-- Required meta tags -->';
        echo '<meta charset="utf-8">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

        echo '<!-- Tab title-->';
        echo '<title>Naagin: ' . $title . '</title>';

        echo '<!-- Bootstrap CSS -->';
        echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">';
        
        echo '<!-- icon CSS -->';
        echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
        
        // choose whether the directoryname is home or not
        // the path for other websites are different for home  
        if ($directoryname == 'home') {
            echo '<!-- Tab icon-->';
            echo '<link href="./common/img/AC.png" rel="icon">';
            echo '<!-- External common CSS file -->';
            echo '<link href="./common/css/styles.css" type="text/css" rel="stylesheet">';    
            echo '<!-- External '. $directoryname . ' CSS -->';
            echo '<link href="./'. $directoryname .'/css/styles.css" type="text/css" rel="stylesheet">';
            echo '<!-- Bootstrap JS -->';
            echo '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>';
            echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>';
            echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>';
            
        } else {
            // other directory locations
            echo '<!-- Tab icon-->';
            echo '<link href="../common/img/AC.png" rel="icon">';
            echo '<!-- External common CSS file -->';
            echo '<link href="../common/css/styles.css" type="text/css" rel="stylesheet">';    
            echo '<!-- External '. $directoryname . ' CSS -->';
            echo '<link href="./css/styles.css" type="text/css" rel="stylesheet">';
        }

        echo '</head>';
        echo '<body>';
    }

// Outputs the navigation bar 
function generateNavBar($pagename){
    echo '<!-- Navigation '. $pagename .'Bar-->';
    echo '<nav class="navbar sticky-top">';
    echo '<!-- Navigation Icon-->';
    echo '<a class="navbar-brand">';

    // choose path location depending whether it is accessing from home page or not
    if ($pagename == "Home"){
        echo '<img src="./common/img/AC.png"  width="50" height="50" alt="navigation bar icon">';
    } else {
        echo '<img src="../common/img/AC.png"  width="50" height="50" alt="navigation bar icon">';
    }

    echo '<span>Naagin</span>';
    echo '</a>';
    echo '<div class="navigation-container ">';
    echo '<ul class="navbar-item">';

    // Array of pages to link
    $linkNames = array("Home", "Game", "Rankboard", "Setting", "Log In");
    $linkFolderHomeRoot = array("./", "./game/", "./rankboard/", "./setting/", "./login/");
    $linkFolderName = array("../", "../game/", "../rankboard/", "../setting/", "../login/");
    $linkFileName = array("index.php", "game.php", "rankboard.php", "setting.php", "login.php");

    // Loop through the navigation items 
    for ($x = 0; $x < count($linkNames); $x++){
        echo '<li class="nav-item">';
        echo '<a class="nav-link"';
        
        // If current item in the linkName array is the chosen page, id active will form part of the html code
        if ($linkNames[$x] == $pagename){
            echo 'id="active"';
        }
        
        // different path for home and other pages
        if ($pagename == "Home"){
            echo 'name ="'.$linkNames[$x].'" href="'. $linkFolderHomeRoot[$x] . $linkFileName[$x] . '">' . $linkNames[$x] .'</a>';
        } else {
            echo 'name ="'.$linkNames[$x].'" href="'. $linkFolderName[$x] . $linkFileName[$x] . '">' . $linkNames[$x] .'</a>';
        }

        echo '</li>';
    }
    echo '</ul>';
    echo '</div>';
    echo '</nav>';

    // if pagename is not Home, then print the following html code. 
    if ($pagename != "Home"){
        echo '<div class="main-content">';
    }
}

//Outputs closing body tag and closing HTML tag
function generateFooter($pagename){
    // if pagename is not Home, then print the following html code. 
    if ($pagename != "Home"){
        echo '</div>';
    }
    echo '
    <footer class="footer_Container">
        <!-- Grid container -->
        <div class="footer_logo-container">
            <!-- Section: Social media -->
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
            <!-- Section: Social media -->

        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3 footer-content" >
            © 2021 Copyright: Avinesh Culloo
        </div>
        <!-- Copyright -->
    </footer>
    ';
}

function generateJavaScript($title){
    // Array Dictionary 
    $linkNames = array(
        "Home" => "./home/js/home.js", 
        "Game" => "./js/game.js", 
        "Rankboard" => "./js/rankboard.js", 
        "Setting" => "./js/setting.js", 
        "Log In" => "./js/login.js",
        "Register" => "./js/register.js"
    );
    
    echo '<script ';
    echo 'src = "'. $linkNames[$title] .'">'; 
    echo '</script>';

    echo '<script ';
    if ($title == "Home") {
        echo 'src = "./common/js/common.js">';
    } else {
        echo 'src = "../common/js/common.js">';
    }

    echo '</script>';
    echo '</body>';
    echo '</html>';
}