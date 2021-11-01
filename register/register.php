<?php
    $pageName = 'Register';
    $folderName = 'register';
    include('../common/common.php');
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>
<div class="signup_header">
    <div id="upper_line">
        <h3> YOUR ESCAPE STARTS </h1>
    </div>
    <div id="lower_line">
        <h3> HERE </h1>
    </div>
</div>

<div class="signup_form">
    <div class="left_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
    </div>
    <div class="main_form">
        <div class="form_details">
            <label for="username" class="form-label"> Username </label>
            <input autocomplete="off" type="text" id="username" >
        </div>
        <div class="form_details">
            <label for="email" class="form-label"> Email </label>
            <input autocomplete="off" type="email" id="email" >
        </div>
        <div class="form_details">
            <label for="dob" class="form-label"> Date of Birth </label>
            <input autocomplete="off" type="date" id="dob" >
        </div>
        <div class="form_details">
            <label for="gender" class="form-label"> Gender </label>
            <select id="gender" style="width:40%; height:40px">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="form_details">
            <label for="password" class="form-label"> Password </label>
            <input autocomplete="off" type="password" id="password">
        </div>
        <div class="form_details">
            <label for="confirm_password" class="form-label"> Confirm Password </label>
            <input autocomplete="off" type="password" id="confirm_password">
        </div>
        <div class="form_details checkbox_container">
            <input class="form-check-input" type="checkbox"  id="termsandcondition">
            <label class="form-check-label" for="termsandcondition">
                I agree to the terms and conditions.
            </label>
        </div>
    </div>
    <div class="right_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
    </div>
</div>

<div class="register_footer">
    <button type="submit">Proceed</button>
    <a href="../login/login.php">Login Instead?</a>
</div>

<?php
    generateFooter($pageName);
?>
