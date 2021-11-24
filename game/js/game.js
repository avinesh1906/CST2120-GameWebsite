let canvas = document.getElementsByClassName("game-window")[0];

// draw the canvas into a 2D space
let context = canvas.getContext("2d");

let play_btn = document.getElementById("play_btn");
play_btn.onclick = checkLoggedIn;

// call the function verify Login
verifyLogin();

// call function to determine level
// level();

// function verifyLogin 
function verifyLogin() 
{   
    // variables
    let text_message = document.getElementById("notLoggedIn");
    let game_window = document.getElementsByClassName("game-window")[0];
    let game_level = document.getElementById("level_radio");
    // check if session storage is empty
    if (sessionStorage.loggedUser == undefined){
        // hide the div text_message
        text_message.style.display = "block";
    } else {
        if (sessionStorage.level == undefined) {
            game_level.style.display = "block";
        } else {
            sessionStorage.removeItem('level');
            // display the div text_message
            game_window.style.display = "block";
        }
    }
}

function checkLoggedIn()
{   
    let game_level = document.getElementById("level_radio");
    let game_window = document.getElementsByClassName("game-window")[0];
    let beginner = document.getElementById("beginner");
    let normal = document.getElementById("normal");
    let time_attack = document.getElementById("time-attack");
    
    if (beginner.checked) {
        sessionStorage.level = "beginner";
    } else if (normal.checked) {
        sessionStorage.level = "normal";
    } else if (time_attack.checked) {
        sessionStorage.level = "time-attack";
    }
    game_level.style.display = "none";
    game_window.style.display = "block";

}

// function level(){
//     if (sessionStorage.level != undefined)
// }