<?php
    // php variables
    $pageName = 'Support';
    $folderName = 'support';

    // include the common.php which contains the php functions
    include('../common/common.php');

    // functions call
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- Card columns class -->
<div class="card-columns">
    <!-- Card: Left Handed People  -->
    <div class="card light-color">
        <!-- Card image -->
        <img class="card-img-top" src="./img/wasd.png" alt="Card image cap">
        <!-- Card Content -->
        <div class="card-body">
            <!-- Card title -->
            <h5 class="card-title">Left Handed People</h5>
            <!-- Card Text -->
            <p class="card-text">
                W: To move the snake up.
                <br>
                S: To move the snake down.
                <br>
                A: To move the snake to the left.
                <br>
                D: to move the snake to the right.
            </p>
        </div>
    </div>

    <!-- Card: Avinesh Culloo -->
    <div class="card dark-color">
        <!-- Card Body Contetn -->
        <div class="card-body">
            <!-- Card Title -->
            <h5 class="card-title">Avinesh Culloo</h5>
            <!-- Card Text -->
            <p class="card-text">
                Student Learning Assistant
                <br>
                Cloud Computing enthusiast
                <br>
                avineshculloo@gmail.com
                <br>
                Tel. +230 58352200
            </p>
        </div>
    </div>

    <!-- Card: AKC Gaming -->
    <div class="card p-3 text-left light-color">
        <blockquote class="blockquote mb-0">
            <!-- Card Title -->
            <h5 class="card-title">
                AKC Gaming 
            </h5>
            <!-- Card Text -->
            <p class="card-text">
                Enjoy the classic snake game for free.
            </p>
        </blockquote>
    </div>

    <!-- Card: Serpent Gif -->
    <div class="card">
        <img class="card-img" src="../common/img/serpent.gif" alt="akc gaming">
    </div>
    
    <!-- Card: Bsc Computer Science -->
    <div class="card p-3 light-color">
        <blockquote class="blockquote mb-0">
            <!-- Card Title -->
            <h5 class="card-title">
                BSc Computer Science 
                <br>
                (System Engineering) 
            </h5>
            <!-- Card Text -->
            <p class="card-text">
                CST2120 Web Applications and Databases
            </p>
        </blockquote>
    </div>

    <!-- Card: Middlesex University Mauritius -->
    <div class="card dark-color">
        <div class="card-body ">
            <!-- Card Title -->
            <h5 class="card-title">Middlesex University Mauritius</h5>
            <!-- Card Text -->
            <p class="card-text">
                Coastal Road,
                <br>
                90203, Uniciti, Flic-en-Flac,
                <br>
                Mauritius.
                <br>
                Tel. +230 403 6400
            </p>
        </div>
    </div>

    <!-- Card: Right Handed People -->
    <div class="card light-color">
        <img class="card-img-top" src="./img/arrow.png" alt="Arrow">
        <div class="card-body">
        <h5 class="card-title">Right Handed People</h5>
        <p class="card-text">
            up : move snake up.
            <br>
            down: move snake down.
            <br>
            left: move snake to the left.
            <br>
            right: move snake to the right.
        </p>
        </div>
    </div>

    <!-- Card: Special Thanks -->
    <div class="card text-center dark-color">
        <div class="card-body">
            <h5 class="card-title">Special Thanks </h5>
            <p class="card-text"> Ms. Ameerah Assotally </p>
            <p class="card-text">
                Lecturer in IT 
                <br>
                Programme coordinator for BSc Cyber Security and Digital Forensics
            </p>
        </div>
    </div>
    <!-- Card: Coursework 1 -->
    <div class="card p-3 text-center light-color">
        <blockquote class="blockquote mb-0">
            <h5 class="card-title">
                Coursework 1
            </h5>
            <p class="card-text">
                Game Website
            </p>
        </blockquote>
    </div>
</div>

<!-- Php function to generate footer -->
<?php
    // Function call
    generateFooter($pageName);
?>
