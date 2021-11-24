// call the function verify Login
verifyLogin();

// function verifyLogin 
function verifyLogin() 
{   
    // variables
    let text_message = document.getElementById("notLoggedIn");
    let game_window = document.getElementsByClassName("game-window")[0];

    // check if session storage is empty
    if (sessionStorage.loggedUser == undefined){
        // hide the div text_message
        text_message.style.display = "block";
    } else {
        // display the div text_message
        game_window.style.display = "block";
    }
}