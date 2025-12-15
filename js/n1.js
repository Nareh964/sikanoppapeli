// Single player
let score = 0;
let current = 0;
let gameActive = true;

const rollBtn = document.querySelector('.roll');
const holdBtn = document.querySelector('.hold');
const newBtn = document.querySelector('.new');

rollBtn.addEventListener('click', () => {
    if (!gameActive) return;
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').src = './img/dice-' + dice + '.png';
    document.getElementById('dice').style.display = 'block';
    if (dice === 1) {
        current = 0;
        document.getElementById('current_0').textContent = current;
        gameActive = false;
        rollBtn.disabled = true;
        holdBtn.disabled = true;
    } else {
        current += dice;
        document.getElementById('current_0').textContent = current;
    }
});

holdBtn.addEventListener('click', () => {
    if (!gameActive) return;
    score += current;
    document.getElementById('score_0').textContent = score;
    current = 0;
    document.getElementById('current_0').textContent = current;
    document.getElementById('dice').style.display = 'none';

    if (score >= 100) {
        console.log('You win!');
        gameActive = false;
        rollBtn.disabled = true;
        holdBtn.disabled = true;
    }
});

newBtn.addEventListener('click', () => {
    score = 0;
    current = 0;
    gameActive = true;
    document.getElementById('score_0').textContent = score;
    document.getElementById('current_0').textContent = current;
    document.getElementById('dice').style.display = 'none';
    rollBtn.disabled = false;
    holdBtn.disabled = false;
});
