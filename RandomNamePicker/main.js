/*
Create a HTML page where you can input and submit the name of multiple people,
when you a person has been submitted they should appear below in a ul

After all participants have been added, you should make a button to randomly select one of the participants.

Use: Math.random(), document.querySelector() instead of getElementById and Class same with querySelectorAll(), 

Try to use more functions, ex: addParticipant(), removeParticipant(), pickWinner()
*/
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addName').click();
    }
});

let numberOfNames = 0;
const winnerButton = document.querySelector("#pickWinner")
const actions = document.querySelector("#actions")
//Function to add name if input value is equal to or greater than 1.
// If no value is added its giving a errorText
function addName() {

    const nameInput = document.querySelector("#nameInput");
    const nameList = document.querySelector("#nameList");

    let name = "";
    //If number of names is over 1 the pick winner button will show
    if (numberOfNames > 1 ) {
        winnerButton.style.width = "auto"
        winnerButton.style.height = "auto"
        winnerButton.style.textalign = "center"
        winnerButton.style.fontSize = "2rem"
        winnerButton.style.opacity = "100%"
        winnerButton.style.display = "block"
        winnerButton.style.marginleft = "20px"
        winnerButton.style.borderColor = "palevioletred"
        winnerButton.style.borderRadius = "25px"
    }
  
    if(nameInput.value.trim().length >= 1){
        name = document.createElement("li");
        name.textContent = nameInput.value;
        nameList.append(name);
        numberOfNames ++;

        const removeName = document.createElement("button");
        removeName.textContent = "X"
        removeName.style.color = "red"
        removeName.id = "removeName"

        removeName.addEventListener("click", function() {
            const name = removeName.parentElement;
            numberOfNames--;
            if (name) {
                name.remove();
            }
            //If number of names is less than or equal to one the Pick winner button will be hidden
            if (numberOfNames <= 1) {
                winnerButton.style.width = "0px"
                winnerButton.style.height = "0px"
                winnerButton.style.opacity = "0%"
                winnerButton.style.display = "none"
                
            }
         
        })
        
        name.append(removeName);

    } else {
      alert("Please enter a name into the field")
    }
    nameInput.value = "";
    const previousWinner = document.getElementById("winnerText")

    previousWinner.textContent = ""
    const winnerDiv = document.querySelector('#winner');
    winnerDiv.classList.remove('show');
}


//Function that picks a random winner from the list
function pickWinner() {
    const nameList = document.querySelectorAll("#nameList li")

    let nameListArray = []
    
        for(let i = 0; i < nameList.length; i++ ){
            nameListArray.push(nameList[i].textContent)
        }
 
    const randomize = Math.floor(Math.random() * nameListArray.length);
    const winner = nameListArray[randomize]


    const winnerText = document.createElement("h1");
    
    winnerText.id = "winnerText";
    //Problem her med at textContent tok med X fra knappen så brukte slice for å fjerne siste bokstav fra stringen
    winnerText.textContent = `The winner is ${winner.slice(0,-1).toUpperCase()}`; 
    winnerText.style.color = "green";
    winnerText.style.fontSize = "3rem"
    const winnerDiv = document.querySelector("#winner")
    winnerDiv.replaceChildren(winnerText);

    showWinner()
  
}

function showWinner() {
    const winnerDiv = document.querySelector('#winner');
    winnerDiv.classList.add('show');
}

