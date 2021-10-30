<?php
    $pageName = 'How To Play';
    $folderName = 'howtoplay';
    include('../common/common.php');
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>
            <div class="howtoplay_header">
                    <h2> How to Play? </h2>
                </div>
            <div class="howtoplay-arrow">
                <img class="arrow_picture" src="./img/arrow.png" alt="arrow" width="250">
                <div class="arrow_information">
                    <ul>
                        <li>up : move snake up.</li>
                        <li>down: move snake down.</li>
                        <li>left: move snake to the left.</li>
                        <li>right: move snake to the right.</li>
                    </ul>
                </div>
            </div>
            <div class="details">
                <h4> Left-handed people can make use of the following keys to move the snake around. </h4>
            </div>
            <div class="howtoplay-wasd">
                <img class="wasd_picture" src="./img/wasd.png" alt="wasd" width="250">
                <div class="wasd_information">
                    <ul>
                        <li>W: To move the snake up.</li>
                        <li>S: To move the snake down.</li>
                        <li>A: To move the snake to the left.</li>
                        <li>D: to move the snake to the right.</li>
                    </ul>
                </div>
            </div>
<?php
    generateFooter($pageName);
?>
