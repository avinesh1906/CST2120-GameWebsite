
verifyLogin();


function verifyLogin() 
{   
    let text_message = document.getElementById("notLoggedIn");
    let game_window = document.getElementsByClassName("game-window")[0];
    console.log(game_window);
    if (sessionStorage.loggedUser == undefined){
        text_message.style.display = "block";
    } else {
        console.log(game_window);
        game_window.style.display = "block";
    }
}