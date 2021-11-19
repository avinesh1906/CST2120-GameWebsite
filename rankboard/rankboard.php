<?php
    // php variables
    $pageName = 'Rankboard';
    $folderName = 'rankboard';

    // include the common.php which contains the php functions
    include('../common/common.php');

    // function calls
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- Rankboard page Title -->
<div class="rankboard_header">
    <h2> Leaderboard </h2>
</div>

<!-- Rankboard table -->
<div class="rankboard_table">
    <table class="table table-hover" id="myTable">
        <!-- Table Body -->
        <tbody>
            <!-- Table Rows -->
            <tr>
        </tbody>
        <!-- Table Head --> 
        <thead>
            <tr>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
            </tr>
        </thead>

    </table>
</div>

<!-- Php function to generate footer -->
<?php
    // function call
    generateFooter($pageName);
    generateJavaScript($pageName);
?>