let noButtonState = 0;
let idImage = 0;

const images = [
    "./img/a1.gif",
    "./img/a2.gif",
    "./img/a3.gif",
    "./img/a4.gif",
    "./img/a5.gif",
    "./img/a6.gif",
    "./img/a7.gif",
    "./img/a8.gif",
    "./img/a9.gif",
    "./img/a10.gif",
    "./img/a11.gif",
    "./img/a12.gif",
    "./img/a13.gif",
    "./img/a14.gif",
    "./img/a15.gif",
];
const finalImage = "./img/final.gif";
const buttonDescription = [
    'No!',
    '¡Oh no! ¿Estás segura?',
    'Realmente, ¿estas segura?',
    'Estás segura de verdad????',
    '¿Segura, segura, segurita?',
    'Andale, di que si!!!',
    'Se que quieres decir que si!',
    'Si dices que no estaré muy triste',
    'Estaré muy triste',
    'Estaré muy muy triste',
    'Estaré muy muy muy triste.',
    'Bueno!, dejaré de preguntar...',
    'Es broma, di que SÍ',
    'Estaré muy muy muy muy muy triste.',
    'Estás rompiendo mi corazón :(',
    'NO???... ya di que si',
    'Andale!!! Chachicha!!!',
    'Siiiiiiiiiiiiiii??????',
    'Bueno... Empecemos de nuevo...'
];
let buttonFontSize = 18;

const gifContainer = document.getElementById('gifContainer');
const btnYes = document.getElementById('yesBtn');
const btnNo = document.getElementById('noBtn');
const question = document.getElementById('question');
const messageCnt = document.getElementById('messageContainer');

gifContainer.src = images[0];

const updateMessage = () => {
    btnNo.textContent = buttonDescription[noButtonState];
    buttonFontSize += 12;
    btnYes.style.fontSize = buttonFontSize + "px";
    noButtonState++;
    if (noButtonState >= buttonDescription.length) {
        noButtonState = 0;
        buttonFontSize = 8;
    }
};

const updateImage = () => {
    const randomNum = Math.floor(Math.random() * 15);
    if (randomNum === idImage) return updateImage();
    idImage = randomNum;
    gifContainer.src = images[idImage];
};

document.getElementById('yesBtn').addEventListener('click', function () {
    question.style.display = 'none';
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
    messageCnt.style.display = 'block';
    messageCnt.innerHTML = '<br>¡AMOCITO!<br>¡TE AMO PINCESA!<br><br>Nuestro Segundo<br>San Valentin<br>Juntos!!!!';
    gifContainer.src = finalImage;

});

document.getElementById('noBtn').addEventListener('click', function () {
    updateMessage();
    updateImage();
});