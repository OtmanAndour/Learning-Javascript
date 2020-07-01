// Challenge 1 : Your age in days

function ageInDays() {
    let birthDay = Date.parse(prompt("What is your birthday? Enter it in this format: Month Day, Year \nExample : May 29, 1997"));
    let today = Date.parse(new Date());
    let ageInDays = Math.floor((today - birthDay) / (1000 * 60 * 60 * 24));
    console.log(ageInDays);
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    let div = document.getElementById('flex-box-result');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//Challenge 2 : Cat Generator

function generateCat() {
    let img = document.createElement('img');
    let div = document.getElementById('flex-box-img')
    img.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(img);
}

//Challenge 3 : Rock Paper Scissors

function getRndInteger(min, max) { //Return an integer between min and max, max excluded
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomChoice() {
    let rdmChoice;
    let rdmNum = getRndInteger(1, 4);
    switch (rdmNum) {
        case 1:
            rdmChoice = "rock"
            break;
        case 2:
            rdmChoice = "paper"
            break;
        case 3:
            rdmChoice = "scissors"
            break;
    }
    return rdmChoice;
}

function displayResult(choice, rdmChoice, text) {
    let div = document.getElementById('rps')
    div.innerHTML = ''
    img_links = {
        'rock': 'https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png',
        'paper': 'https://www.pinclipart.com/picdir/big/51-511523_rock-paper-rock-paper-scissors-clipart-png-download.png',
        'scissors': 'https://www.vhv.rs/dpng/d/535-5357819_rock-paper-scissors-png-transparent-png.png'
    }
    let choiceImg = document.createElement('img');
    choiceImg.src = img_links[choice];
    choiceImg.id = 'choice-result';
    let rdmChoiceImg = document.createElement('img');
    rdmChoiceImg.src = img_links[rdmChoice];
    rdmChoiceImg.id = 'rdmChoice-result';
    let textDiv = document.createElement('div');
    let h1 = document.createElement('h1');
    let textResult = document.createTextNode(text);
    h1.appendChild(textResult);
    let button = document.createElement('button');
    button.className = "btn btn-success";
    button.onclick = replay;
    let textButton = document.createTextNode('Play Again!');
    button.appendChild(textButton)
    textDiv.appendChild(h1);
    textDiv.appendChild(button);
    div.appendChild(choiceImg);
    div.appendChild(textDiv);
    div.appendChild(rdmChoiceImg);
}

function replay() {
    let div = document.getElementById('rps')
    div.innerHTML = '<img id="rock" src="https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png" onclick="rpsGame(this)">' +
        '<img id="paper" src="https://www.pinclipart.com/picdir/big/51-511523_rock-paper-rock-paper-scissors-clipart-png-download.png" onclick="rpsGame(this)">' +
        '<img id="scissors" src="https://www.vhv.rs/dpng/d/535-5357819_rock-paper-scissors-png-transparent-png.png" onclick="rpsGame(this)">'
}

function rpsGame(div) {
    let rdmChoice = randomChoice();
    let choice = div.id;
    if (choice == 'rock' && rdmChoice == 'paper') {
        text = 'You Lost!';
    } else if (choice == 'rock' && rdmChoice == 'scissors') {
        text = 'You Won!'
    } else if (choice == 'paper' && rdmChoice == 'rock') {
        text = 'You Won!';
    } else if (choice == 'paper' && rdmChoice == 'scissors') {
        text = 'You Lost!';
    } else if (choice == 'scissors' && rdmChoice == 'rock') {
        text = 'You Lost!';
    } else if (choice == 'scissors' && rdmChoice == 'paper') {
        text = 'You Won!';
    } else if (choice == rdmChoice) {
        text = "Tied";
    }
    displayResult(choice, rdmChoice, text);
}


//Challenge 4 : Change the color of All Buttons

let allButtons = document.getElementsByTagName('button');
let copyAllButtons = [];
for (let button of allButtons) {
    copyAllButtons.push(button.classList[1]);
}

function randomProperty(object) {
    let keys = Object.keys(object);
    return object[keys[keys.length * Math.random() << 0]];
}

function buttonColorChange(selection) {
    let choice = selection.value;
    let buttonColors = {
        'red': 'btn-danger',
        'blue': 'btn-primary',
        'green': 'btn-success',
        'yellow': 'btn-warning'
    };
    switch (choice) {
        case 'reset':
            let i = 0;
            for (let button of allButtons) {
                button.classList.remove(button.classList[1]);
                button.classList.add(copyAllButtons[i]);
                i++;
            }
            break;
        case 'random':
            for (let button of allButtons) {
                button.classList.remove(button.classList[1]);
                let randomColor = randomProperty(buttonColors);
                button.classList.add(randomColor);
            }
            break;
        default:
            for (let button of allButtons) {
                button.classList.remove(button.classList[1]);
                button.classList.add(buttonColors[choice]);
            }
    }
}


// Challenge 5 : Blackjack

let blackjackGame = {
    'you':{'scorespan': '#your-score', 'div': '#your-box' , 'score': 0, 'button':'hit'},
    'dealer':{'scorespan': '#dealer-score', 'div': '#dealer-box' , 'score': 0, 'button':'stand'},
    'cards' : ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', function() {blackjackPlay(YOU)});
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-deal-button').disabled = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function randomCard() {
    return blackjackGame['cards'][getRndInteger(0, blackjackGame['cards'].length)];
}

function showCard(activePlayer, randomCard) {
    let cardImage = document.createElement('img');
    cardImage.src = 'static/images/' + randomCard +'.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function score (card, player) {
    let points;
    switch (card) {
        case 'K':
        case 'J':
        case 'Q':
            points = 10;
            break;
        case 'A':
            if (player['score'] <= 10) {
                points = 11;
            } else {
                points = 1;
            }
            break;
        default:
            points = parseInt(card);
    }
    if ( player['score'] + points <= 21 ) {
        return player['score'] += points;
    } else {
        player['score'] = 'Bust!';
        return (player['score']);
    }
}

async function blackjackStand() {
    while ( DEALER['score'] < 21) {
        if ( DEALER['score'] > YOU['score']) {
            break;
        } else {
        blackjackPlay(DEALER);
        await sleep(1000);
        }
    }
    whoIsWinner();
    document.querySelector('#blackjack-deal-button').disabled = false;
}

function whoIsWinner() {
    if ( DEALER['score'] == YOU['score'] && YOU['score'] != 'Bust!' ) {
        blackjackGame['draws']++;
        document.querySelector('#blackjack-result').innerHTML = "Draw";
        document.querySelector('#draws').innerHTML = blackjackGame['draws'];
    } else if( YOU['score'] == 'Bust!') {
        blackjackGame['losses']++;
        document.querySelector('#blackjack-result').innerHTML = "You lost!";
        document.querySelector('#blackjack-result').style.color = 'red';
        document.querySelector('#losses').innerHTML = blackjackGame['losses'];
        lossSound.play();
    } else if ( YOU['score'] != 'Bust!' &&  DEALER['score'] == 'Bust!' ) {
        blackjackGame['wins']++;
        document.querySelector('#blackjack-result').innerHTML = "You won!";
        document.querySelector('#blackjack-result').style.color = 'green';
        document.querySelector('#wins').innerHTML = blackjackGame['wins'];
        winSound.play();
    } else if ( YOU['score'] > DEALER['score'] ) {
        blackjackGame['wins']++;
        document.querySelector('#blackjack-result').innerHTML = "You won!";
        document.querySelector('#blackjack-result').style.color = 'green';
        document.querySelector('#wins').innerHTML = blackjackGame['wins'];
        winSound.play();
    } else if ( YOU['score'] < DEALER['score'] ) {
        blackjackGame['losses']++;
        document.querySelector('#blackjack-result').innerHTML = "You lost!";
        document.querySelector('#blackjack-result').style.color = 'red';
        document.querySelector('#losses').innerHTML = blackjackGame['losses'];
        lossSound.play();
    }
}

function blackjackPlay(player) {
    document.querySelector('#blackjack-deal-button').disabled = true;
    if (player == DEALER) {
        let playButtons = document.querySelector('.flex-blackjack-row-2').querySelectorAll('button');
        for (button of playButtons){
            button.disabled = true;
        }
    }
    let card = randomCard();
    showCard(player, card);
    if ( score(card, player) == 'Bust!' ){
        document.querySelector(player['scorespan']).innerHTML = 'Bust!';
        document.querySelector('#blackjack-'+player['button']+'-button').disabled = true;
    } else {
        document.querySelector(player['scorespan']).innerHTML = player['score'];
    };
}


function blackjackDeal() {
    let yourImages= document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (let image of yourImages){
        image.remove();
    }
    for (let image of dealerImages){
        image.remove();
    }
    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector(YOU['scorespan']).innerHTML = YOU['score'];
    document.querySelector(DEALER['scorespan']).innerHTML = DEALER['score'];
    document.querySelector('#blackjack-result').innerHTML = "Let's play!";
    document.querySelector('#blackjack-result').style.color = 'black';
    document.querySelector('#blackjack-hit-button').disabled = false;
    document.querySelector('#blackjack-stand-button').disabled = false;
    document.querySelector('#blackjack-deal-button').disabled = true;
}