const body = document.querySelector('body');
const playAgain = document.querySelector('.play-again')

const userImage = document.querySelector('.your-pick > img')
const computerImage = document.querySelector('.computer-pick > img')

const youWinText = document.querySelector('.you-win')
const computerWinsText = document.querySelector('.computer-wins')

const params = new URLSearchParams(window.location.search)
// console.log(params);

let user, computer, winner;
const choiceImage = {
    '0': {image: '0.png', alt: 'Камінь'},
    '1': {image: '1.png', alt: 'Папір'},
    '2': {image: '2.png', alt: 'Ножиці'},
}

// console.log(params.has('user'));
// console.log(params.has('computer'));
if(!params.has('user') || !params.has('computer')) {
    window.location.href = './'
}

user = params.get('user')
computer = params.get('computer')
// console.log(user, computer);

userImage.src = `./images/${choiceImage[user].image}`
userImage.alt = choiceImage[user].alt

computerImage.src = `./images/${choiceImage[computer].image}`
computerImage.alt = choiceImage[computer].alt

playAgain.addEventListener('click', () => {
    window.location.href = './'
})

const checkWinner = () => {
    if(user === computer) {
        winner = 'tie'
    } else if(user === '0' && computer === '1') {
        winner = 'c'
    } else if(user === '0' && computer === '2') {
        winner = 'u'
    } else if(user === '1' && computer === '0') {
        winner = 'u'
    } else if(user === '1' && computer === '2') {
        winner = 'c'
    } else if(user === '2' && computer === '0') {
        winner = 'c'
    } else if(user === '2' && computer === '1') {
        winner = 'u'
    }

    if(winner === 'tie') {
        youWinText.textContent = 'НІЧИЯ!!!'
        computerWinsText.textContent = 'НІЧИЯ!!!'
    } else if(winner === 'u') {
        body.classList.add('you-win')
        youWinText.textContent = 'ВИ ПЕРЕМОГЛИ!!!'
    } else if(winner === 'c') {
        body.classList.add('computer-wins')
        computerWinsText.textContent = 'КОМП`ЮТЕР ПЕРЕМІГ!!!'
    }
}

checkWinner()