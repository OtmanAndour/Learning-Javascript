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

function getRndInteger(min, max) {
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