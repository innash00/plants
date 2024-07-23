document.querySelector('.burger').addEventListener('click', function() {    //открытие меню и фонав адаптиве
    this.classList.toggle('active');
    document.querySelector('.main-menu').classList.toggle('open');
    document.querySelector('.background').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('open-burger');
})

let html = document.querySelector("html");           //запрет скролла
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

function openRateWindow(event) {              //раскрытие окошек с тарифами
    const buttons = document.querySelectorAll('.arrow');

    event.target.classList.toggle('active');
    const rateNumber = event.target.getAttribute('id').slice(5);
    if (!event.target.classList.contains('active')){
        
        document.querySelector('.rates').classList.remove('open-rates');
        document.querySelector(`.rate-button[id=rate-button${rateNumber}]`).classList.remove('open-rate-button');
        document.querySelector(`.rate-footer[id=rate-footer${rateNumber}]`).classList.remove('open-rate-footer');

    } else {
        buttons.forEach(btn => {
            const buttonNumber = btn.getAttribute('id').slice(5);
            btn.classList.remove('active');
            document.querySelector(`.rate-button[id=rate-button${buttonNumber}]`).classList.remove('open-rate-button');
            document.querySelector(`.rate-footer[id=rate-footer${buttonNumber}]`).classList.remove('open-rate-footer');
        });
        event.target.classList.add('active');

        document.querySelector('.rates').classList.add('open-rates');
        document.querySelector(`.rate-button[id=rate-button${rateNumber}]`).classList.add('open-rate-button');
        document.querySelector(`.rate-footer[id=rate-footer${rateNumber}]`).classList.add('open-rate-footer');
    }
}

const rates = document.querySelectorAll('.arrow');
rates.forEach(rate => {
    rate.addEventListener('click', openRateWindow);
})

document.querySelector('.select-arrow').addEventListener('click', function() {    //раскрытие списка городов
    if (document.querySelector('.select-title').textContent === 'City') {
        document.querySelector('.city-window').classList.toggle('active');
        this.classList.toggle('active');
        document.querySelector('.select-city').classList.toggle('active');
    } else {
        document.querySelector('.city-window').classList.toggle('active');
        this.classList.toggle('active');
    }
})

function openCityWindow(event) {          //открытие окошка с адресом и контактами
    const cityName =  event.target.textContent;
    document.querySelector('.select-title').textContent = cityName;
    document.querySelector('.select-city').classList.add('active');
    document.querySelector('.city-window').classList.remove('active');
    document.querySelector('.select-arrow').classList.remove('active');

    document.querySelector('.city-card').classList.add('active');
    switch(cityName) {
        case 'Canandaigua, NY':
            document.querySelector('.city-name').textContent = cityName;
            document.querySelector('.city-phone').textContent = '+1 585 393 0001';
            document.querySelector('.city-adress').textContent = '151 Charlotte Street';
            break;
        case 'New York City':
            document.querySelector('.city-name').textContent = cityName;
            document.querySelector('.city-phone').textContent = '+1 212 456 0002';
            document.querySelector('.city-adress').textContent = '9 East 91st Street';
            break;
        case 'Yonkers, NY':
            document.querySelector('.city-name').textContent = cityName;
            document.querySelector('.city-phone').textContent = '+1 914 678 0003';
            document.querySelector('.city-adress').textContent = '511 Warburton Ave';
            break;
        case 'Sherrill, NY':
            document.querySelector('.city-name').textContent = cityName;
            document.querySelector('.city-phone').textContent = '+1 315 908 0004';
            document.querySelector('.city-adress').textContent = '14 WEST Noyes BLVD';
            break;
    }
}

const cities = document.querySelectorAll('.city-window p');
cities.forEach(city => {
    city.addEventListener('click', openCityWindow);
})


function makeCall() {
    const selectedPhone = document.querySelector('.city-phone').textContent;
    window.location.href = `tel:${selectedPhone}`;
}

