// Entire script will be in script mode
"use strict";
let play_btn = document.getElementById("play_btn");
play_btn.onclick = checkLoggedIn;

sessionStorage.removeItem('level');

function checkLoggedIn()
{   
    let error_message = document.getElementById("signinPrompt");
    let beginner = document.getElementById("beginner");
    let normal = document.getElementById("normal");
    let time_attack = document.getElementById("time-attack");

    if (sessionStorage.loggedUser != undefined){
        
        if (beginner.checked) {
            sessionStorage.level = "beginner";
        } else if (normal.checked) {
            sessionStorage.level = "normal";
        } else if (time_attack.checked) {
            sessionStorage.level = "time-attack";
        }
        // redirect to home page
        window.location.href="./game/game.php";
    } else {
        error_message.style.display = "block";
    }
}