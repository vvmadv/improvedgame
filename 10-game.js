let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};


updateScoreElement();





// WE removed the code below and used operator ||    to check if the first part if true then everything before || wont work  
//and vise versa if the first argument is false the default values after || will be set

// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0,
//     };
// }
// we can use if (score === null) or if (!score) to check if the value isnt a number

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'Kisses for Ivan';
        } else if (computerMove === 'paper') {
            result = 'Kisses for Ivan';
        } else if (computerMove === 'scissors') {
            result = 'Shiva and Ivan kiss';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Shiva and Ivan kiss';
        } else if (computerMove === 'paper') {
            result = 'Kisses for Shiva';
        } else if (computerMove === 'scissors') {
            result = 'Kisses for Shiva';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'Kisses for Ivan';
        } else if (computerMove === 'paper') {
            result = 'Shiva and Ivan kiss';
        } else if (computerMove === 'scissors') {
            result = 'Kisses for Shiva';
        }
    }

    if (result === 'Kisses for Shiva') {
        score.wins += 1;
    } else if (result === 'Kisses for Ivan') {
        score.losses += 1;
    } else if (result === 'Shiva and Ivan kiss') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `Shiva <img src="img/${playerMove}-emoji.png" class="move-icon">
<img src="img/${computerMove}-emoji.png" class="move-icon">
Ivan `;
}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Kisses for Shiva: ${score.wins} <br> Kisses for Ivan: ${score.losses} <br>Shiva and Ivan kiss: ${score.ties}`;
}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 & randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 & randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove
}
