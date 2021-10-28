<?php

//Outputs the header for the page and opening body tag
function generateHeader($title, $directoryname){
echo '<!DOCTYPE html>';
echo '<html>';
echo '<!-- Required meta tags -->';
        echo '<meta charset="utf-8">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

        echo '<!-- Tab title-->';
        echo '<title>Naagin: ' . $title . '</title>';

        echo '<!-- Bootstrap CSS -->';
        echo '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">';
        
        echo '<!-- icon CSS -->';
        echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
        
        if ($title == 'home') {
            echo '<!-- Tab icon-->';
            echo '<link href="./common/img/AC.png" rel="icon">';
            echo '<!-- External common CSS file -->';
            echo '<link href="./common/css/styles.css" type="text/css" rel="stylesheet">';    
            echo '<!-- External'. $directoryname. 'CSS -->';
            echo '<link href="./'. $directoryname .'/css/styles.css" type="text/css" rel="stylesheet">';
            echo '<!-- Bootstrap JS -->';
            echo '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>';
            echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>';
            echo '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>';
        } else {
            echo '<!-- Tab icon-->';
            echo '<link href="../common/img/AC.png" rel="icon">';
            echo '<!-- External common CSS file -->';
            echo '<link href="../common/css/styles.css" type="text/css" rel="stylesheet">';    
            echo '<!-- External'. $directoryname . 'CSS -->';
            echo '<link href="./'. $directoryname .'/css/styles.css" type="text/css" rel="stylesheet">';
        }

        echo '</head>';
        echo '<body>';
    }


//Outputs closing body tag and closing HTML tag
function generateFooter(){
    echo '
    <footer class="footer_Container">
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
    ';
    echo '</body>';
    echo '</html>';
}