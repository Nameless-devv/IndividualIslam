const colors = [
    { name: 'red', hex: '#ff0000' },
    { name: 'green', hex: '#008000' },
    { name: 'blue', hex: '#0000ff' },
    { name: 'yellow', hex: '#ffff00' },
    { name: 'purple', hex: '#800080' },
    { name: 'orange', hex: '#ffa500' },
    { name: 'pink', hex: '#ffc0cb' },
    { name: 'brown', hex: '#a52a2a' }
];

let currentColorIndex = 0;

function getRandomColors() {
    const shuffledColors = colors.sort(() => 0.5 - Math.random());
    return shuffledColors.slice(0, 4); // 4 ta tasodifiy rang
}

function displayColor() {
    const colorBox = document.getElementById('color-box');
    const colorOptions = getRandomColors();
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    colorBox.style.backgroundColor = randomColor.hex;
    currentColorIndex = randomColor.name;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    colorOptions.forEach(color => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = color.name;
        button.addEventListener('click', function() {
            const result = document.getElementById('result');
            const correctSound = document.getElementById('correct-sound');
            const wrongSound = document.getElementById('wrong-sound');
            if (this.textContent === currentColorIndex) {
                result.textContent = 'To\'g\'ri!';
                correctSound.play(); // To'g'ri javob uchun audio
            } else {
                result.textContent = 'Noto\'g\'ri. Iltimos, qaytadan harakat qiling.';
                wrongSound.play(); // Noto'g'ri javob uchun audio
            }
        });
        optionsDiv.appendChild(button);
    });
}

// Sahna yuklanganda dastlabki rangni ko'rsatish
document.addEventListener('DOMContentLoaded', displayColor);

document.getElementById('next').addEventListener('click', function() {
    displayColor();
    document.getElementById('result').textContent = '';
});