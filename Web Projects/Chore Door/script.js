// door global variables
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

// door path global variables
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

// game global variables
numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3; 

//game logic global variables
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
let currentlyPlaying = true;

// start button
const startButton = document.getElementById('start');

// play game function
function isBot(door) {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

function isClicked(door) {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

function playDoor(door) {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win')
    } else if (isBot(door)) {
        gameOver();
    }
};

// game logic functions
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random()*numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};

// door on click functions
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying === true) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    };
};
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying === true) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    };
};
doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying === true) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    };
};
startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound()
    };
};
function startRound() {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

//game over
function gameOver(status) {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game Over! Play again?';
    }
    currentlyPlaying = false;
};

startRound();