<?php
    $pageName = 'Setting';
    $folderName = 'setting';
    include('../common/common.php');
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>
<div class="setting_header">
    <h2> Change Password </h2>
</div>
<div class="setting_form">
    <div class="left_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif" width="250" alt="side_picture" >
    </div>
    <div class="main_form">
        <div class="form_details">
            <label for="current_password" class="form-label"> Currrent </label>
            <div class="form-input">
                <input autocomplete="off" type="password" id="current_password">
            </div>
        </div>
        <div class="form_details">
            <label for="new_password" class="form-label"> New </label>
            <div class="form-input">
                <input autocomplete="off" type="password" id="new_password">
            </div>
        </div>
        <div class="form_details">
            <label for="confirm_password" class="form-label"> Retype New </label>
            <div class="form-input">
                <input autocomplete="off" type="password" id="confirm_password">
            </div>
        </div>
        <div class="form_details">
            <h5> It's a good idea to use a strong password that you don't use elsewhere. </h5>
        </div>
    </div>
    <div class="right_side_picture">
    <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
    </div>
</div>
<div class="setting_footer">
    <button type="submit">Save Changes</button>
</div>
<?php
    generateFooter($pageName);
?>
