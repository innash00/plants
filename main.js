document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.main-menu').classList.toggle('open');
    document.querySelector('.background').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('open-burger');
})

let html = document.querySelector("html")
document.querySelector(".burger").onclick = function(){
html.classList.toggle("unscroll")
}

document.querySelector('.background').addEventListener('click', function() {
    document.querySelector('.main-menu').classList.remove('open');
    this.classList.remove('open');
    document.querySelector('.burger').classList.remove('active');
    html.classList.remove('unscroll');
});