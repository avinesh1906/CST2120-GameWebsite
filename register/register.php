<?php
    // php variables
    $pageName = 'Register';
    $folderName = 'register';

    // include the common.php which contains the php functions
    include('../common/common.php');

    // functions call
    generateHeader($pageName, $folderName);
    generateNavBar($pageName);
?>

<!-- Signup Page Title -->
<div class="signup_header">
    <!-- First Line -->
    <div id="upper_line">
        <h3> YOUR ESCAPE STARTS </h1>
    </div>
    <!-- Second Line -->
    <div id="lower_line">
        <h3> HERE </h1>
    </div>
</div>

<!-- SignUp Form -->
<div class="signup_form">
    <!-- Left side Gif -->
    <div class="left_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
    </div>
    <!-- Input form -->
    <div class="form-layout" >
        <!-- Form Input Label and input -->
        <div class="form-content">
            <!-- Username -->
            <div class="form_details">
                <div class="form_input">
                    <label for="username" class="form-label"> Username </label>
                    <input autocomplete="off" type="text" id="Username" onkeyup="usernameValidation()">
            
                </div>
                <div class="form_error">
                    <span id="usr_details"></span>
                </div>
            </div>
            <!-- Email -->
            <div class="form_details">
                <div class="form_input">
                    <label for="email" class="form-label"> Email </label>
                    <input autocomplete="off" type="email" id="email" onkeyup="emailValidation()">
                </div>
                <div class="form_error">
                    <span id="email_details"></span>
                </div>
            </div>
            <!-- Date of Birth -->
            <div class="form_details">
                <div class="form_input">
                    <label for="dob" class="form-label"> Date of Birth </label>
                    <input autocomplete="off" type="date" id="dob" value="<?php echo date("Y-m-d"); ?>" max="<?php echo date('Y').'-'.date('m').'-'.date('d'); ?>">
                </div>
            </div>
            <!-- Gender -->
            <div class="form_details">
                <div class="form_input">
                    <label for="gender" class="form-label"> Gender </label>
                    <select id="gender" style="width:40%; height:40px">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>               
            </div>
            <!-- Password -->
            <div class="form_details">
                <div class="form_input">
                    <label for="password" class="form-label"> Password </label>
                    <input autocomplete="off" type="password" id="password" onkeyup="passwordValidation()" >
                    <i id="toggleEye" name="password" class=" fa fa-eye"></i>
                </div>
                <div class="form_error">
                    <span id="pwd_details"></span>
                </div>                
            </div>
            <!-- Confirm Password -->
            <div class="form_details">
                <div class="form_input">
                    <label for="confirm_password" class="form-label"> Confirm Password </label>
                    <input autocomplete="off" type="password" id="confirm_password" onkeyup="confirmPassword()">
                </div>
                <div class="form_error">
                    <span id="confirmPWD_details"></span>
                </div>                
            </div>
            <!-- Terms and Condition -->
            <div class="form_details checkbox_container">
                <input class="form-check-input" type="checkbox"  id="termsandcondition">
                <label class="form-check-label" for="termsandcondition" required>
                    I agree to the terms and conditions.
                </label>
            </div>
        </div>
        <!-- Form Footer Container -->
        <div class="register_footer">
            <!-- Submit Button -->
            <button type="submit" id="submit_btn">Proceed</button>
            <!-- Login Instead Link -->
            <a href="../login/login.php">Login Instead?</a>
        </div>
</div>
    <!-- Right Side Gif -->
    <div class="right_side_picture">
        <img class="side_picture" src="../common/img/serpent.gif"  width="250" alt="side_picture" >
    </div>
</div>

<!-- Php function to generate the footer -->
<?php
    // Function call
    generateFooter($pageName);
    generateJavaScript($pageName);
?>
