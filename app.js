const tileContainer = document.querySelector('.tile-container');
const keyContainer = document.querySelector('.key-container');
const messageContainer = document.querySelector('.message-container');

const wordle = "SUPER";

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
];

const guessArrays = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

keys.forEach(key => {
    const button = document.createElement('button');

    button.textContent = key;

    button.setAttribute('id', key);

    button.addEventListener('click', () => { handleClick(key) });

    keyContainer.append(button);
});

guessArrays.forEach((array, index) => {
    const row = document.createElement('div');

    row.setAttribute('id', 'row-' + index);

    array.forEach((guess, guessIndex) => {
        const tile = document.createElement('div');

        tile.setAttribute('id', 'row-' + index + '-tile-' + guessIndex);

        tile.classList.add('tile');

        row.append(tile);
    });

    tileContainer.append(row);
});

const handleClick = (letter) => {
    if (letter === '«') {
        deleteLetter();
        return;
    }

    if (letter === 'ENTER') {
        checkRow();
        return;
    }

    if (currentTile < 5 && currentRow < 6) {
        addLetter(letter);
    }
}

const addLetter = (letter) => {
    const tile = document.getElementById('row-' + currentRow + '-tile-' + currentTile);

    tile.textContent = letter;

    guessArrays[currentRow][currentTile] = letter;

    tile.setAttribute('data', letter);

    currentTile++;
}