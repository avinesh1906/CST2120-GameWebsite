
console.log("uhmm");



generateTable();

function sortScore(){

}

function generateTable(){
    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    console.log(table);
    let users = JSON.parse(localStorage.users);
    users.sort((a,b) =>
    {
        return b.score - a.score;
    });

    for (i = 0; i < users.length; i++){
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = i+1;
        cell2.innerHTML = users[i].username;
        cell3.innerHTML = users[i].score;
    }

}


