// Entire script will be in script mode
"use strict";
// function to generate the content of the table body
function generateTable(){
    // retrieve only the tbody tag name from the table
    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    // convert JSON(html local storage data) into JS objects
    let users = JSON.parse(localStorage.users);
    
    // Sort the JS objects into descending orders
    users.sort((a,b) =>
    {
        return b.score - a.score;
    });

    //  loop through the JS objects
    for (let i = 0; i < users.length; i++){
        // create variable for row
        let row = table.insertRow(i);
        // create variable for cells
        let rank = row.insertCell(0);
        let username = row.insertCell(1);
        let score = row.insertCell(2);

        // assign the content to the cells
        rank.innerHTML = i+1;
        username.innerHTML = users[i].username;
        score.innerHTML = users[i].score;
    }
}

//  call the function generateTable()
generateTable();