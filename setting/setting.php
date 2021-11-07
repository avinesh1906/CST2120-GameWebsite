<?php
    // php variables
    $pageName = 'Setting';
    $folderName = 'setting';

    // include the common.php which contains the php functions
    include('../common/common.php');

    // functions call
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- Setting Page Title -->
<div class="setting_header">
    <h2> Change Password </h2>
</div>

<!-- Setting form -->
<div class="setting_form">
    <!-- Left side Gif -->
    <div class="left_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif" width="250" alt="side_picture" >
    </div>
    <!-- Setting form -->
    <form class="form-layout" action="../index.php">
        <!-- Form Label and Input -->
        <div class="form-content">
            <!-- Current Password -->
            <div class="form_details">
                <label for="current_password" class="form-label"> Currrent </label>
                <div class="form-input">
                    <input autocomplete="off" type="password" id="current_password">
                </div>
            </div>
            <!-- New Password -->
            <div class="form_details">
                <label for="new_password" class="form-label"> New </label>
                <div class="form-input">
                    <input autocomplete="off" type="password" id="new_password">
                </div>
            </div>
            <!-- Confirm New Password -->
            <div class="form_details">
                <label for="confirm_password" class="form-label"> Retype New </label>
                <div class="form-input">
                    <input autocomplete="off" type="password" id="confirm_password">
                </div>
            </div>
            <!-- Form text -->
            <div class="form_details">
                <h5> It's a good idea to use a strong password that you don't use elsewhere. </h5>
            </div>
        </div>
        <div class="setting_footer">
            <button type="submit">Save Changes</button>
        </div>
    </form>
    <!-- Right side Gif -->
    <div class="right_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
    </div>
</div>

<!-- Php function to generate footer -->
<?php
    // Function call
    generateFooter($pageName);
    generateJavaScript($pageName);
?>
