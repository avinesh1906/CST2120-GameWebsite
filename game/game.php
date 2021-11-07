<?php
    // php variables
    $pageName = 'Game';
    $folderName = 'game';

    // include the common.php which contains the php functions
    include('../common/common.php');

    // call the php functions 
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- Game Window -->
<div class="game-window">
    Game section
</div>
<?php
    // php function to generate the footer
    generateFooter($pageName);
    generateJavaScript($pageName);
?>