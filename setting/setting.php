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
    <div class ="login_Required">
        <div class="title">
            Login Required
            <br>
            Create an account or login to access Setting.
        </div>
        <div class="loginRequired_btn">
            <div id="signin_btn">
                <button onclick="window.location.href='../login/login.php'">Log In</button>
            </div> 
            <div id="register_btn">
                <button  onclick='window.location.href="../register/register.php"'>Register</button>
            </div> 
        </div>
    </div>
    <!-- Setting form -->
    <section class="form-layout">
        <!-- Form Label and Input -->
        <div class="form-content">
            <!-- Current Password -->
            <div class="form_details">
                <label for="current_password" class="form-label"> Current </label>
                <div class="form-input">
                    <input autocomplete="off" type="password" id="current_password" onkeyup="oldPassword()">
                </div>
                <div class="form_error">
                    <span id="currentPWD_details"></span>
                </div>   
            </div>
            <!-- New Password -->
            <div class="form_details">
                <label for="new_password" class="form-label"> New </label>
                <div class="form-input">
                    <input autocomplete="off" type="password" id="new_password" onkeyup="passwordValidation()">
                    <i id="toggleEye" name="new_password" class=" fa fa-eye"></i>
                </div>
                <div class="form_error">
                    <span id="newPWD_details"></span>
                </div>   
            </div>
            <!-- Confirm New Password -->
            <div class="form_details">
                <label for="confirm_password" class="form-label"> Retype New </label>
                <div class="form-input">
                    <input autocomplete="off" type="password" id="confirm_password" onkeyup="confirmPassword()">
                </div>
                <div class="form_error">
                    <span id="confirmPWD_details"></span>
                </div>   
            </div>
            <!-- Form text -->
            <div class="form_details">
                <h5> It's a good idea to use a strong password that you don't use elsewhere. </h5>
            </div>
        </div>
        <div class="setting_footer">
            <button type="submit" id="submit_btn">Save Changes</button>
        </div>
    </section>
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
