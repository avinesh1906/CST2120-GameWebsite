// Entire script will be in script mode
"use strict";

//Import classes from other modules
import {Canvas} from './Canvas.js';
import {Snake} from './Snake.js';
import {Food} from './Food.js';

// getElementsbyClassName variables
let gameWindow = document.getElementsByClassName("game-window")[0];
let menu_class = document.getElementsByClassName("menu")[0];
let counter_details = document.getElementsByClassName("countdown_class")[0];
let game_over = document.getElementsByClassName("game_over")[0];
let timer = document.getElementsByClassName("timerAttack_sec")[0];
// getElementbyID variables
let game_level = document.getElementById("level_radio");
let score_details = document.getElementById("score_Details");
let counter_num = document.getElementById("counter_num");
let oldHighScore = document.getElementById("oldHighScore");
let newHighScore = document.getElementById("newHighScore");
let GameOverScore = document.getElementById("GameOverScore");
let timer_id = document.getElementById("timerID_sec");
let beginnerRules = document.getElementById("beginnerRules");
let normalRules = document.getElementById("normalRules");
let time_AttackRules = document.getElementById("time_AttackRules");
let scoreTitle = document.getElementById("scoreTitle");

// local storage variables
let users = JSON.parse(localStorage.users);

// canvas
let canvas = document.getElementsByClassName("game-window")[0];
let context = canvas.getContext("2d");

// context colors
let context_background_color = "#345B63";
let border_color = "#D4ECDD";
// snake color
let snakeColor;
let snakeBorderColor;
// food color
let foodColor;
let foodBorderColor;

// objects
let canvasOPP= new Canvas(context, 0, 0, gameWindow.width, gameWindow.height, context_background_color, border_color);

// start counter 
let counterleft = 5;

// start counter 
let timer_sec = 30;

// play button during level choice
let play_btn = document.getElementById("play_btn");
play_btn.onclick = assignLevel;

// pause button
let pause_btn = document.getElementById("pause_btn");
pause_btn.onclick = togglePause;

// restart button
let restart_btn = document.getElementById("restart_btn");
restart_btn.onclick = restart;

// Change Level button
let level_change = document.getElementById("level_change");
level_change.onclick = change_level;

// quit button
let quit = document.getElementById("quit");
quit.onclick = exit;

// Game Over Level Change
let GameOverLevel_change = document.getElementById("GameOverLevel_change");
GameOverLevel_change.onclick = change_level;

// score
let score = 0;

// speed
let speed;

// keyboard ARROWS value
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;
// keyboard Alphabet value
const A_KEY = 65;
const D_KEY = 68;
const W_KEY = 87;
const S_KEY = 83;

// Snake Direction
let UP;
let DOWN;
let RIGHT;
let LEFT;

// Color Var
let colorArray;
let color; 

// set True is snake is changing direction
let snakeChangingPos = false;
// pause
let paused = false;

// Sound effects
let dead = new Audio('./sound/dead.wav');
let bump = new Audio('./sound/bump.mp3');

// snake start position
let snakePos = [
    {xPos:130, yPos:70},
    {xPos:120, yPos:70},
    {xPos:110, yPos:70},
    {xPos:100, yPos:70},
    {xPos:90, yPos:70}
];

// food starting position
let foodPos = {
    x: 160, 
    y: 70
}

//  Horizontal movement speed
let xPosStep = 10;
// Vertical movement speed
let yPosStep = 0;

// Event Listener for key down
document.addEventListener("keydown", navigateSnake);

// function verifyLogin 
function verifyLogin() 
{   
    // variables
    let text_message = document.getElementById("notLoggedIn");
    // check if session storage is empty
    if (sessionStorage.loggedUser == undefined){
        // prompt the user to log in
        text_message.style.display = "flex";
    } else {
        // display the level choice window
        if (sessionStorage.level == undefined) {
            game_level.style.display = "block";
            
        } else {
            // call function counter
            counter();
        }
    }
}

//  function to assign the chosen level to session storage when play_game btn clicked
function assignLevel()
{   
    // variables
    let beginner = document.getElementById("beginner");
    let normal = document.getElementById("normal");
    let time_attack = document.getElementById("time-attack");
    
    // verify which radio button is selected
    // then assign the level name
    if (beginner.checked) {
        sessionStorage.level = "beginner";
    } else if (normal.checked) {
        sessionStorage.level = "normal";
    } else if (time_attack.checked) {
        sessionStorage.level = "time-attack";
    }
    //  call counter function
    counter();
}

// function to determine which function to execute
function level(){
    // check the level name and call the required function
    if (sessionStorage.level == "beginner") {
        beginnerLevel();
    } else if (sessionStorage.level == "normal") {
        normalLevel();
    } else if (sessionStorage.level == "time-attack") {
        timeover();
        timeAttackLevel();
    } 
}

// function counter
function counter() {
    for (let i = 0; i < users.length; i++){
        if (users[i].username == sessionStorage.loggedUser) {
            sessionStorage.highscore = users[i].score;
        }
    }
    // display the counter window
    counter_details.style.display = "flex";

    // check the level name and display the required div
    if (sessionStorage.level == "beginner") {
        beginnerRules.style.display = "block";
    } else if (sessionStorage.level == "normal") {
        normalRules.style.display = "block";
    } else if (sessionStorage.level == "time-attack") {
        time_AttackRules.style.display = "block";
    } 

    // Hide the non-required windows
    game_level.style.display = "none";
    gameWindow.style.display = "none";
    score_details.style.display = "none";
    menu_class.style.display = "none";

    // countdown timer 1 sec
    let count = setInterval(function(){
        // display the timeleft
        counter_num.innerHTML = counterleft;

        // decrement timeleft
        counterleft -= 1;


        // check if timeleft is equal to zero
        if (counterleft < 0){
            // close the counter
            clearInterval(count);

            // hide non-required windows
            counter_details.style.display = "none";
            // display required windows
            gameWindow.style.display = "block";
            score_details.style.display = "block";
            menu_class.style.display = "block";

            // call function level
            level();
        }
    }, 1000);
    
}

// function to pause or unpause
function togglePause()
{   
    // if pause is true, then set to false. vice-versa
    paused = !paused; 
    if (!paused) {
        pause_btn.innerHTML = "Pause";
        // call the appropriate level according to session storage
        if (sessionStorage.level == "beginner") {
            beginnerLevel();
        } else if (sessionStorage.level == "normal") {
            normalLevel();
        } else if (sessionStorage.level == "time-attack") {
            timeAttackLevel();
        } 
    } else {
        pause_btn.innerHTML = "Play";
    }
}

// Function to restart the game;
function restart()
{
    // reload the page
    window.location.reload();
}

// function to change the level
function change_level()
{
    // reload the page to set it to default
    window.location.reload();
    // remove the item of level key in session storage
    sessionStorage.removeItem('level');
    // hide the menu, score and game window
    gameWindow.style.display = "none";
    score_details.style.display = "none";
    menu_class.style.display = "none";
    game_over.style.display = "none";
    // call the function verifylogin
    verifyLogin();
}

// function to redirect to the home page
function exit()
{
   window.location.href="../index.php"; 
}

function timeover()
{
    pause_btn.style.display = "none";
    
    // countdown timer 1 sec
    setInterval(function(){
        // decrement timeleft
        timer_sec -= 1;
        // display the timeleft
        timer_id.innerHTML = timer_sec;
        // change the timer color 
        if (timer_sec < 10){
            timer_id.style.color = getRandomRed();
            timer.style.color = getRandomRed();
        }
        // check if timeleft is equal to zero
        if (timer_sec < 0){
            gameOver();
        }
    },1000);
}


// function to display gameover
function gameOver()
{
    // hide non-required windows
    game_over.style.display = "block";
    // display required windows
    timer.style.display = "none";
    gameWindow.style.display = "none";
    score_details.style.display = "none";
    menu_class.style.display = "none";

    for (let i = 0; i < users.length; i++){
        if (users[i].username == sessionStorage.loggedUser) {
            if (score > users[i].score) {
                users[i].score =  score;
                newHighScore.style.display = "block";
            }
            else {
                oldHighScore.style.display = "block";
            }
        }
    }
    // convert JS objects into JSON for html local storage   
    localStorage.users = JSON.stringify(users);
    GameOverScore.innerHTML = score;
    return;
}

// generate snake colour
function snakeColour()
{
    // colour arrays
    colorArray = ["32502E", "3E7C17", "0B4619", "5D8233", "3A6351"];
    // randomly choose the colour
    color = "#" + colorArray[Math.floor(Math.random() * 4)];

    return color;
}

// random red colour
function getRandomRed() {
    // hexadecimal digits
    let hex = '0123456789ABCDEF';
    //  starting hex colour
    let colour = '#FF';
    // loop to produce 4 hex digits
    for (let i = 0; i < 4; i++) {
        // make use of math.random to generate a number 0 to 1.0
        // times 16 to have a number 0 to 16
        // math.floor to round the number downward to the nearest integer
        colour += hex[Math.floor(Math.random() * 16)];
    }
    return colour;
}

// function to change the snake direction
function navigateSnake(keyDetails)
{   
    // retrieve the keyboard key press code
    let KeyPressedCode = keyDetails.keyCode;

    // check the xPosStep and yPosStep to determine direction of snake
    UP = (yPosStep === -10);
    DOWN = (yPosStep === 10);
    RIGHT = (xPosStep === 10);
    LEFT = (xPosStep === -10);
    // add snakeChangingPos true
    snakeChangingPos = true;

    // verify if left arrow or a is pressed and is not going to right
    if ((KeyPressedCode == LEFT_ARROW || KeyPressedCode == A_KEY) && !RIGHT ){
        // change the x and y position
        xPosStep = -10;
        yPosStep = 0;
    } 
    // verify if right arrow or d is pressed and is not going to left
    if ((KeyPressedCode == RIGHT_ARROW || KeyPressedCode == D_KEY) && !LEFT ){
        // change the x and y position
        xPosStep =  10;
        yPosStep = 0;
    } 
    // verify if up arrow or w is pressed and not going to down
    if ((KeyPressedCode == UP_ARROW || KeyPressedCode == W_KEY) && !DOWN ){
        // change the x and y position
        xPosStep = 0;
        yPosStep = -10;
    } 
    // verify if down arrow or S is pressed and not going up
    if ((KeyPressedCode == DOWN_ARROW || KeyPressedCode == S_KEY) && !UP ){
        // change the x and y position
        xPosStep = 0;
        yPosStep =  10;
    } 
    // check if P is pressed
    if(KeyPressedCode == 80 && sessionStorage.level != "time-attack"){
        // call togglePause function
        togglePause();
    }
}

// function to determine if game has ended or not
function die(snakeOOP){
    //Autophagy Death
    if (snakeOOP.ownDeath()){
        // play sound dead
        dead.play();
        return true;
    }
    // check if beginner level or not
    if(sessionStorage.level == "beginner"){
        snakeOOP.noWall();
    } else {
        // not normal level: if hit wall, game over
        if (snakeOOP.touchWall()){
            // play sound bump
            bump.play();
            return true;
        }
        return false;
    }
    return false;
}

// function to change the speed
function setSpeed(){
    if (score > 0) {
        speed = 150;
    } 
    if (score > 50) {
        speed = 140;
    } 
    if (score > 100) {
        speed = 130;
    } 
    if (score > 150) {
        speed = 120;
    } 
    if (score > 200) {
        speed = 110;
    } 
    if (score > 250) {
        speed = 100;
    }
    return speed;
}


//  Beginner level function
function beginnerLevel()
{
    snakeColor = snakeColour();
    snakeBorderColor = "#89B5AF";

    foodColor = getRandomRed();
    foodBorderColor =  "#FF6B6B";

    let snakeOOP = new Snake(context, snakeColor, snakeBorderColor, snakePos, xPosStep, yPosStep, gameWindow, score);
    let foodOPP = new Food(context, foodColor, foodBorderColor, foodPos, 10, 10, gameWindow);

    // check if the game has ended, i.e die
    if (die(snakeOOP)){
        // call gameOver
        gameOver();
        return;
    }
     
    // reset the changing position to false
    snakeChangingPos  = false;

    // check if pause or not
    if (paused) return;

    setTimeout(function(){
        // draw a new canvas
        canvasOPP.draw();
        // draw food
        foodOPP.drawFood();
        // move the snake's coordinates
        score = snakeOOP.snakeMovement(foodOPP);
        if (score > sessionStorage.highscore){
            scoreTitle.innerHTML = "New High Score";
            scoreTitle.style.color = getRandomRed(); 
        }
        // Display the score
        score_num.innerHTML = score;
        // draw the snake
        snakeOOP.drawSnake();
        // re call the function to have a loop
        beginnerLevel();
    }, 150);

}


// Normal Level function 
function normalLevel()
{
    snakeColor = snakeColour();
    snakeBorderColor = "#89B5AF";

    foodColor = getRandomRed();
    foodBorderColor =  "#FF6B6B";

    let snakeOOP = new Snake(context, snakeColor, snakeBorderColor, snakePos, xPosStep, yPosStep, gameWindow, score);
    let foodOPP = new Food(context, foodColor, foodBorderColor, foodPos, 10, 10, gameWindow);

    // check if the game has ended, i.e die
    if (die(snakeOOP)){
        // call gameOver
        gameOver();
        return;
    }
    
    speed = setSpeed();

    // reset the changing position to false
    snakeChangingPos  = false;

    // check if pause or not
    if (paused) return;

    setTimeout(function(){
        // draw a new canvas
        canvasOPP.draw();
        // draw food
        foodOPP.drawFood();
        // move the snake's coordinates
        score = snakeOOP.snakeMovement(foodOPP);
        if (score > sessionStorage.highscore){
            scoreTitle.innerHTML = "New High Score";
            scoreTitle.style.color = getRandomRed(); 
        }
        // Display the score
        score_num.innerHTML = score;
        // draw the snake
        snakeOOP.drawSnake();
        // re call the function to have a loop
        normalLevel();
    }, speed);

}

// Time Attack Level function 
function timeAttackLevel()
{
    snakeColor = snakeColour();
    snakeBorderColor = "#89B5AF";

    foodColor = getRandomRed();
    foodBorderColor =  "#FF6B6B";

    timer.style.display = "block";

    let snakeOOP = new Snake(context, snakeColor, snakeBorderColor, snakePos, xPosStep, yPosStep, gameWindow, score);
    let foodOPP = new Food(context, foodColor, foodBorderColor, foodPos, 10, 10, gameWindow);

    // check if the game has ended, i.e die
    if (die(snakeOOP)){
        // call gameOver
        gameOver();
        return;
    }

    // reset the changing position to false
    snakeChangingPos  = false;

    // check if pause or not
    if (paused) return;

    setTimeout(function(){
        // draw a new canvas
        canvasOPP.draw();
        // draw food
        foodOPP.drawFood();
        // move the snake's coordinates
        score = snakeOOP.snakeMovement(foodOPP);
        if (score > sessionStorage.highscore){
            scoreTitle.innerHTML = "New High Score";
            scoreTitle.style.color = getRandomRed(); 
        }
        // Display the score
        score_num.innerHTML = score;
        // draw the snake
        snakeOOP.drawSnake();
        // re call the function to have a loop
        timeAttackLevel();
    }, 150);

}

// call the function verify Login
verifyLogin();