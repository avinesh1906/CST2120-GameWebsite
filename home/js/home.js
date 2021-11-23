let play_btn = document.getElementById("play_btn");
play_btn.onclick = checkLoggedIn;

function checkLoggedIn()
{   
    
    let error_message = document.getElementById("signinPrompt");
    if (sessionStorage.loggedUser != undefined){
        // redirect to home page
        window.location.href="./game/game.php";
    } else {
        error_message.style.display = "block";
    }
}