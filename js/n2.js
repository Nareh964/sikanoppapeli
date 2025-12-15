// Two player 
let scores = [0, 0];
let current = 0;
let activePlayer = 0;
let gameActive = true;

const rollBtn = document.querySelector('.roll');
const holdBtn = document.querySelector('.hold');
const newBtn = document.querySelector('.new');

function switchPlayer() {
    document.querySelector('.pelaaja' + (activePlayer + 1)).classList.remove('active');
    current = 0;
    document.getElementById('current_' + activePlayer).textContent = current;
    activePlayer = 1 - activePlayer;
    document.querySelector('.pelaaja' + (activePlayer + 1)).classList.add('active');
    document.getElementById('current_' + activePlayer).textContent = current;
}

rollBtn.addEventListener('click', () => {
    if (!gameActive) return;
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice1').src = './img/dice-' + dice1 + '.png';
    document.getElementById('dice2').src = './img/dice-' + dice2 + '.png';
    document.getElementById('dice1').style.display = 'inline-block';
    document.getElementById('dice2').style.display = 'inline-block';
    if (dice1 === 1 && dice2 === 1) {
        current += 25;
    } else if (dice1 === 1 || dice2 === 1) {
        switchPlayer();
        return;
    } else if (dice1 === 3 && dice2 === 3) {
        current += 12;
    } else {
        current += dice1 + dice2;
    }
    document.getElementById('current_' + activePlayer).textContent = current;
});

holdBtn.addEventListener('click', () => {
    if (!gameActive) return;
    scores[activePlayer] += current;
    document.getElementById('score_' + activePlayer).textContent = scores[activePlayer];
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    if (scores[activePlayer] >= 100) {
        gameActive = false;
        rollBtn.disabled = true;
        holdBtn.disabled = true;
        return;
    }
    switchPlayer();
});

newBtn.addEventListener('click', () => {
    scores = [0, 0];
    current = 0;
    activePlayer = 0;
    gameActive = true;
    document.getElementById('score_0').textContent = 0;
    document.getElementById('score_1').textContent = 0;
    document.getElementById('current_0').textContent = 0;
    document.getElementById('current_1').textContent = 0;
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.querySelector('.pelaaja1').classList.add('active');
    document.querySelector('.pelaaja2').classList.remove('active');
    rollBtn.disabled = false;
    holdBtn.disabled = false;
});
