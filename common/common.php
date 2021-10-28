<?php

//Outputs the header for the page and opening body tag
function generateHeader($title){
echo '<!DOCTYPE html>';
echo '<html>';
echo '<!-- Required meta tags -->';
        echo '<meta charset="utf-8">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

        echo '<!-- Tab title-->';
        echo '<title>Naagin: ' . $title . '</title>';

        echo '<!-- Tab icon-->';
        echo '<link href="../common/img/AC.png" rel="icon">';

        echo '<!-- Bootstrap CSS -->';
        echo '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">';
        
        echo '<!-- External common CSS file -->';
        echo '<link href="./css/styles.css" type="text/css" rel="stylesheet">';

        echo '<!-- icon CSS -->';
        echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
        
        if ($title == 'Home') {
            echo '<!-- External CSS -->';
            echo '<link href="./home/css/styles.css" type="text/css" rel="stylesheet">';
            echo '<!-- Bootstrap JS -->';
            echo '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';
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