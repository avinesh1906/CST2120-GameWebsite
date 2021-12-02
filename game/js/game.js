// Entire script will be in script mode
"use strict";

// getElementsbyClassName variables
let canvas = document.getElementsByClassName("game-window")[0];
let game_window = document.getElementsByClassName("game-window")[0];
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

// local storage variables
let users = JSON.parse(localStorage.users);

let context_background_color;

// game variables
let snake_head;
let snake_color;
let snake_border_color;
let timer_sec = 30;

// general speed
let velocity = 10;
//  Horizontal movement speed
let xPosStep = velocity;
// Vertical movement speed
let yPosStep = "0";
// score
let score = 0;
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
// food coordinates
let food = {
    x:0, 
    y:90
};
// set True is snake is changing direction
let snakeChangingPos = false;
// pause
let paused = false;

// draw the canvas into a 2D space
let context = canvas.getContext("2d");

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

// start counter 
let timeleft = 3;

// Colour Var
let colour_Array;
let colour; 

// Event Listener for key down
document.addEventListener("keydown", navigate_Snake);

// snake starting position
let snake;
snake = [
    {xPos:130, yPos:90},
    {xPos:130, yPos:80},
    {xPos:130, yPos:70},
    {xPos:120, yPos:70},
    {xPos:110, yPos:70}
]

if (sessionStorage.level = "time-attack"){
    timeover();

}
// set up snakes
// snake = new Snake(context, snake_pos, snakeColour(), "#89B5AF");

// function verifyLogin 
function verifyLogin() 
{   
    // variables
    let text_message = document.getElementById("notLoggedIn");
    // check if session storage is empty
    if (sessionStorage.loggedUser == undefined){
        // hide the div text_message
        text_message.style.display = "block";
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
        timeAttackLevel();
    } 
}

//  Beginner level function
function beginnerLevel()
{   
    // context, snake and snake-border color 
    context_background_color = "#345B63";
    snake_color = snakeColour();
    snake_border_color = "#89B5AF";

    if (die()){
        // call gameOver
        gameOver();
        return;
    }
    
    snakeChangingPos  = false;

    if (paused) return;

    setTimeout(function(){
       
        // clear the canvas for new snake
        clearCanvas();
        // draw the food
        drawFood();
        // move the snake's coordinates
        snake_movement();
        // draw the snake
        drawSnake();
        // call the beginnerLevel to have a loop
        beginnerLevel();

    }, 150);

}

// function to clear the canvas
function clearCanvas()
{   
    // set the drawing color
    context.fillStyle = context_background_color;

    // Context has a method for drawing rectangles
    context.fillRect(0,0,game_window.width,game_window.height);   
    
    // Draw a border around the canvas 
    // This will be helpful to detect whether the snake touches the wall or not
    context.strokeRect(0,0,game_window.width,game_window.height);
}

// function to draw the snake
function drawSnake()
{
    // loop through snake variable to print each snake element
    // making use of arrow function
    snake.forEach(element => {
        drawSnakeElement(element)
    });
}

// function to print each snake element
function drawSnakeElement(element)
{
    // Snake color
    context.fillStyle = snake_color;
    // Snake border color
    context.strokestyle = snake_border_color;

    // Draw a rect to mark the snake element
    context.fillRect(element.xPos, element.yPos, 10, 10);
    // Draw the snake border for each element
    context.strokeRect(element.xPos, element.yPos, 10, 10);
}

// function to change the snake direction
function navigate_Snake(keyDetails)
{   
    // retrieve the keyboard key press code
    let KeyPressedCode = keyDetails.keyCode;

    // check the xPosStep and yPosStep to determine direction of snake
    UP = (yPosStep == ("-" + velocity));
    DOWN = (yPosStep == velocity);
    RIGHT = (xPosStep == velocity);
    LEFT = (xPosStep == ("-" + velocity));
    // add snakeChangingPos true
    snakeChangingPos = true;

    // verify if left arrow or a is pressed and is not going to right
    if ((KeyPressedCode == LEFT_ARROW || KeyPressedCode == A_KEY) && !RIGHT ){
        // change the x and y position
        xPosStep = ("-" + velocity);
        yPosStep = 0;
    } 
    // verify if right arrow or d is pressed and is not going to left
    if ((KeyPressedCode == RIGHT_ARROW || KeyPressedCode == D_KEY) && !LEFT ){
        // change the x and y position
        xPosStep =  velocity;
        yPosStep = 0;
    } 
    // verify if up arrow or w is pressed and not going to down
    if ((KeyPressedCode == UP_ARROW || KeyPressedCode == W_KEY) && !DOWN ){
        // change the x and y position
        xPosStep = 0;
        yPosStep = ("-" + velocity);
    } 
    // verify if down arrow or S is pressed and not going up
    if ((KeyPressedCode == DOWN_ARROW || KeyPressedCode == S_KEY) && !UP ){
        // change the x and y position
        xPosStep = 0;
        yPosStep =  velocity;
    } 
    // check if P is pressed
    if(KeyPressedCode == 80 && sessionStorage.level != "time-attack"){
        // call togglePause function
        togglePause();
    }
}

// function to check if eat tail or touch canvas border (wall)
function die()  
{   
    // detect whether snake hits the wall
    let TOPWALLHIT = snake[0].yPos < 0;
    let BOTTONWALLHIT = snake[0].yPos > (game_window.height - 10);
    let LEFTWALLHIT = snake[0].xPos < 0;
    let RIGHTWALLHIT = snake[0].xPos > (game_window.width - 10);

    //Autophagy Death
    for (let i = 1; i < snake.length; i++){
        
        if (snake[0].xPos == snake[i].xPos && snake[i].yPos == snake[0].yPos){
            return true;
        }
    }

    // check if beginner level or not
    if (sessionStorage.level =="beginner"){
        // if exit wall comes from the other side
        for (let i = 0; i < snake.length; i++){
            if (snake[i].xPos < 0) {
                snake[i].xPos = snake[i].xPos + game_window.width;
            }
            if (snake[i].xPos == (game_window.width - 10)) {
                snake[i].xPos = snake[i].xPos - game_window.width;
            }
            if (snake[i].yPos < 0) {
                snake[i].yPos = snake[i].yPos + game_window.height;
            }
            if (snake[i].yPos == (game_window.height - 10)) {
                snake[i].yPos = snake[i].yPos - game_window.height;
            }
        }
    // not normal level: if hit wall, game over
    } else {
        if (LEFTWALLHIT || RIGHTWALLHIT || TOPWALLHIT || BOTTONWALLHIT){
            return true;
        }
        return false;
    }

    return false;
    
}

// Function for horizontal and vertical Movement for the snake
/* Horizontal Movement
To move the snake to the right by 10px, we should increase
the x-coordinate by 10px and to left decrease by -10px*/

/*  Vertifcal Movement 
To move the snake vertically, we should only modify the y-coordinate of 
the head to prevent the snake to shift upside down. */
function snake_movement()
{      
    let foodEaten;
    let score_num = document.getElementById("score_num");
    // create a new head for the snake
    snake_head = {
        xPos: snake[0].xPos + eval(xPosStep), 
        yPos: snake[0].yPos + eval(yPosStep)
    };
    
    // Add the head to the beginning
    snake.unshift(snake_head);
    
    foodEaten = snake[0].xPos == food.x && snake[0].yPos == food.y;

    if (foodEaten){
        // increase score
        score += 10;
        // Display the score
        score_num.innerHTML = score;
        // generate a new food location
        generateFoodLocationRandom();
    } else {
        // Remove the last element of the snake
        snake.pop();
    }

}

// random function to produce x and y position
function randomPosition(min, max)
{
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

// function to produce the food randomly in the canvas
function generateFoodLocationRandom()
{   
    // generate random location for food
    food.x = randomPosition(0,game_window.width - eval(velocity));
    food.y = randomPosition(0, game_window.height - eval(velocity));

    // loop through the snake's elements
    for (let i = 0; i < snake.length; i++){
        if (checkLocation(food.x, food.y, snake[i].xPos, snake[i].yPos)){
            generateFoodLocationRandom();
        }
    }
}

// function to verify if food location is same as the snake location
function checkLocation(xFood,yFood,xSnake,ySnake)
{
    return (xSnake == xFood && yFood == ySnake) ? true : false; 
}

// function to draw the food
function drawFood()
{
    // food colour
    context.fillStyle = getRandomRed();
    //  food border colour
    context.strokestyle = "#FF6B6B";
    //  draw the food
    context.fillRect(food.x, food.y, 10, 10);
    context.strokeRect(food.x, food.y, 10, 10);
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
    game_window.style.display = "none";
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

// function counter
function counter() {
    // display the counter window
    counter_details.style.display = "flex";
    // Hide the non-required windows
    game_level.style.display = "none";
    game_window.style.display = "none";
    score_details.style.display = "none";
    menu_class.style.display = "none";
    
    // countdown timer 1 sec
    let count = setInterval(function(){
        // decrement timeleft
        timeleft -= 1;

        // display the timeleft
        counter_num.innerHTML = timeleft;

        // check if timeleft is equal to zero
        if (timeleft == 0){
            // close the counter
            clearInterval(count);

            // hide non-required windows
            counter_details.style.display = "none";
            // display required windows
            game_window.style.display = "block";
            score_details.style.display = "block";
            menu_class.style.display = "block";

            // call function level
            level();
        }
    }, 1000);
    
}

// Normal Level function 
function normalLevel()
{
    // context, snake and snake-border color 
    context_background_color = "#345B63";
    snake_color = snakeColour();
    snake_border_color = "#89B5AF";

    if (die()){
        // call gameOver
        gameOver();
        return;
    }

    snakeChangingPos  = false;

    if (paused) return;

    setTimeout(function(){
    
        // clear the canvas for new snake
        clearCanvas( context_background_color);
        // draw the food
        drawFood();
        // move the snake's coordinates
        snake_movement();
        // draw the snake
        drawSnake();
        // call the beginnerLevel to have a loop
        normalLevel();

    }, 100);

}

// generate snake colour
function snakeColour()
{
    // colour arrays
    colour_Array = ["32502E", "3E7C17", "0B4619", "5D8233", "3A6351"];
    // randomly choose the colour
    colour = "#" + colour_Array[Math.floor(Math.random() * 4)];

    return colour;
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

// function to display gameover
function gameOver()
{
    // hide non-required windows
    game_over.style.display = "block";
    // display required windows
    timer.style.display = "none";
    game_window.style.display = "none";
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
}

// Time Attack Level function 
function timeAttackLevel()
{

    // context, snake and snake-border color 
    context_background_color = "#345B63";
    snake_color = snakeColour();
    snake_border_color = "#89B5AF";
    timer.style.display = "block";

    if (die()){
        // call gameOver
        gameOver();
        return;
    }

    snakeChangingPos  = false;

    if (paused) return;

    setTimeout(function(){
    
        // clear the canvas for new snake
        clearCanvas( context_background_color);
        // draw the food
        drawFood();
        // move the snake's coordinates
        snake_movement();
        // draw the snake
        drawSnake();
        // call the beginnerLevel to have a loop
        timeAttackLevel();

    }, 150);

}

function timeover()
{
    pause_btn.style.display = "none";
    // countdown timer 1 sec
    let count = setInterval(function(){
        // decrement timeleft
        timer_sec -= 1;

        // display the timeleft
        timer_id.innerHTML = timer_sec;

        // check if timeleft is equal to zero
        if (timer_sec == 0){
            // close the counter
            // clearInterval(count);
            gameOver();
        }
    }, 1000);
}

// call the function verify Login
verifyLogin();