let score = 0;
let human = 0;
let computer = 0;
let humanSelection = null;



const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const compImage = document.getElementById('computer');

const humanSelectionImage = document.getElementById('humanSelection');
const pcSelectionImage = document.getElementById('pcSelection');

const humanScore = document.getElementById('humanScore');
const pcScore = document.getElementById('pcScore');

const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')

const messagesWin = ['Good job! ', 'Nice! ', 'Point for humanity! ', 'Congratulations! ', 'Huzzah! One point for you! ']
const messagesLose = ['Oooh, tough break...', 'Sorry. ', 'Better luck next time. ', "You'll have to do better than that. ", "What were you thinking! "]

function computerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const selection = choices[Math.floor(Math.random() * choices.length)];
    console.log(selection);
    return selection;
    
}

function compare(selection) {
    // console.log(selection);
    
    const pcSelection = computerSelection();
    // console.log(pcSelection);

    humanSelectionImage.src = `./rsrcs/${selection}.png`
    pcSelectionImage.src = `./rsrcs/${pcSelection}.png`
    let winner = null;
    

    if (selection === 'rock') {
        if (pcSelection === 'paper') {
            winner = 'pc';
        } else {
            winner = 'human';
        }
    }

    if (selection === 'paper') {
        if (pcSelection === 'scissors') {
            winner = 'pc';
        } else {
            winner = 'human';
        }
    }

    if (selection === 'scissors') {
        if (pcSelection === 'rock') {
            winner = 'pc';
        } else {
            winner = 'human';
        }
    }

    if (selection === pcSelection) {
        console.log('Tie');
        winner = 'tie'
    }

    console.log('Winner is:', winner)

    const extraMessage = ['true', 'false'];
    
    const addMore = extraMessage[Math.floor(Math.random() * extraMessage.length)];
    console.log(addMore);

    if (winner === 'human') {
        human +=1;
        humanScore.textContent = `Human ${human}`

        message1.style.display = 'block';
        message1.textContent = 'YOU WIN!'
        message1.style.color = 'green';

        message2.style.display = 'block';
        const smallMessage = messagesWin[Math.floor(Math.random() * messagesWin.length)];

        if (addMore === 'true') {
            message2.textContent = smallMessage + `${selection} beats ${pcSelection};`;

        } else {
            message2.textContent = smallMessage
        }
    
        
    }

    if (winner === 'pc') {
        computer +=1;
        pcScore.textContent = `Computer ${computer}`
        message1.style.display = 'block';
        message1.textContent = 'COMPUTER WINS!'
        message1.style.color = 'red';

        message2.style.display = 'block';
        const smallMessage = messagesLose[Math.floor(Math.random() * messagesLose.length)];

        if (addMore === 'true') {
            message2.textContent = smallMessage + `${pcSelection} beats ${selection};`;

        } else {
            message2.textContent = smallMessage
        }
    }

    if (winner === 'tie') {

        message1.style.display = 'block';
        message1.textContent = 'TIE GAME'
        message1.style.color = 'white';
        message2.style.display = 'none';
    }

    message1.style.fontSize = '10vh';
    setTimeout(() => {
        message1.style.fontSize = '7vh';
    }, 300
    );


    
}



compImage.addEventListener("click", function() {
    computerSelection();
});

rock.addEventListener("click", function() {
    compare('rock');
});

paper.addEventListener("click", function() {
    compare('paper');
});

scissors.addEventListener("click", function() {
    compare('scissors');
});


// prevButton.addEventListener("click", function() {
//     plusSlides(1);
//   });