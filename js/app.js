let searchBtn = document.querySelector('.form__btn');
let searchInput = document.querySelector('.form__search');

searchBtn.addEventListener('click',()=>{
    searchInput.classList.toggle('openSearch');
    searchBtn.classList.toggle('moveSearchBtn');
    console.log('click');
});

// OVERVIEW NAV

const headerNavBtns = document.querySelectorAll('.headerNavBtn');
const headerText = document.querySelector('.text');
const headerCarousel = document.querySelector('.header__carousel');
const headerLogo = document.querySelector('.header__logo');
const headerDetails = document.querySelector('.detailsChunk');
const overlay = document.querySelector('.overlay');

headerNavBtns.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        if(index === 0){
            headerText.classList.add('showElement');
            headerDetails.classList.remove('showElement');
            headerCarousel.classList.remove('showElement');
            button.classList.add('borderColorRed');
            headerNavBtns[1].classList.remove('borderColorRed');
            headerNavBtns[2].classList.remove('borderColorRed');
            headerLogo.classList.remove('resizeHeaderLogo');
            overlay.classList.remove('showOverlay');


        }
        else if(index === 1){
            headerCarousel.classList.add('showElement');
            headerText.classList.remove('showElement');
            headerDetails.classList.remove('showElement');
            button.classList.add('borderColorRed');
            headerNavBtns[0].classList.remove('borderColorRed');
            headerNavBtns[2].classList.remove('borderColorRed');
            headerLogo.classList.add('resizeHeaderLogo');
            overlay.classList.add('showOverlay');

        }

        else if (index === 2){
            headerDetails.classList.add('showElement');
            headerText.classList.remove('showElement');
            headerCarousel.classList.remove('showElement');
            button.classList.add('borderColorRed');
            headerNavBtns[0].classList.remove('borderColorRed');
            headerNavBtns[1].classList.remove('borderColorRed');
            headerLogo.classList.add('resizeHeaderLogo');
            overlay.classList.add('showOverlay');
        }
    })
});

// CAROUSEL HEADER

let carouselContainer = document.querySelector('.slider-container');
let movieCards = document.querySelectorAll('.moviecard');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

movieCards.forEach((card,index)=>{
    card.style.left = `${18*index}rem`;
});
let count = 0;

prevBtn.addEventListener('click',()=>{
    count--;
    moveCards();
});

nextBtn.addEventListener('click',()=>{
    count++;
   
    moveCards();
});

function moveCards(){
    if(count === movieCards.length - 3){
        count = 0;
    }
    else if(count < 0){
        count = movieCards.length - 3 ;
    }
    movieCards.forEach((card)=>{
        card.style.transform = `translateX(-${18*count}rem)`;
    });
}