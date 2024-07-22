document.querySelector('.burger').addEventListener('click', function() {    //открытие меню и фона
    this.classList.toggle('active');
    document.querySelector('.main-menu').classList.toggle('open');
    document.querySelector('.background').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('open-burger');
})

let html = document.querySelector("html")           //запрет скролла
document.querySelector(".burger").onclick = function() {
html.classList.toggle("unscroll");
}

document.querySelector('.background').addEventListener('click', function() {        //закрытие меню при нажатии на фон
    document.querySelector('.main-menu').classList.remove('open');
    this.classList.remove('open');
    document.querySelector('.burger').classList.remove('active');
    html.classList.remove('unscroll');
});

function blurWrongCard(event) {              //блюр карточек + активация кнопок
    event.target.classList.toggle('active'); 

    const activeButtons = document.querySelectorAll('.choice-button.active'); 
    const allCards = document.querySelectorAll('.card');
    const arrayAllCards = Array.from(allCards);
    allCards.forEach(card => {
        card.classList.remove('blur-card');
    });
    let isService = [];
    for(let i = 0; i < activeButtons.length; i++) {
        for(let j = 0; j < allCards.length; j++) {
            if (arrayAllCards[j].getAttribute('name') !== activeButtons[i].getAttribute('id').slice(4) && isService[j] !== false) {
                arrayAllCards[j].classList.add('blur-card');
                
            } else {
                arrayAllCards[j].classList.remove('blur-card');
                isService[j] = false;
            }
        }
    }
    console.log(isService);
    updateButtonStates();
}

function updateButtonStates() {      //слежка за количеством активированных кнопок
    const activeButtons = document.querySelectorAll('.choice-button.active');
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(button => {
        button.disabled = false;
    });
   
    if (activeButtons.length >= 2) {
        buttons.forEach(button => {
            if (!button.classList.contains('active')) {
                button.disabled = true;
            }
        });
    }
}

const buttons = document.querySelectorAll('.choice-button');  //обработка кликов на кнопки сервиса
    buttons.forEach(button => {
    button.addEventListener('click', blurWrongCard);

    
})

