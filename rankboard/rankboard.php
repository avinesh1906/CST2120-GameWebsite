<?php
    $pageName = 'Rankboard';
    $folderName = 'rankboard';
    include('../common/common.php');
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>
            <div class="rankboard_header">
                <h2> Leaderboard </h2>
            </div>
            <div class="rankboard_table">
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Avinesh Culloo</td>
                        <td>54</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sounil Gopee</td>
                        <td>54</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Anoopama Boyjoo</td>
                        <td> 49</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
<?php
    generateFooter($pageName);
?>