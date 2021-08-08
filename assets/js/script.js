const hamburger = document.querySelector('.nav-mobile-btn');
const nav = document.querySelector('.nav');
const navItemsContainer = document.querySelector('.nav-items-container');
const navItems = document.querySelectorAll('.nav-items-container li');
const heroContainer = document.querySelector('.hero-container');

let decision = true;

const runNav = () => {
    if(decision){
        hamburger.classList.add('open');
        nav.classList.add('open');
        navItemsContainer.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        heroContainer.classList.add('background');
        decision = false;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navItemsContainer.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        heroContainer.classList.remove('background');
        decision = true;
    }
}

const animationHeading = ["Hi, I'm Kenneth"];
let number = 0; 
let text = '';

function animationNumber(){
    
    if(number === 16){
        clearInterval(stop);
        console.log('hello');
    } else {
        text = animationHeading[0].slice(0, number);
        document.querySelector('#heroTextAnimationHeading').textContent = text;
        number++;
    }
    console.log(text);
}

const stop = setInterval(animationNumber, 400);

const navBtn = document.querySelector('.nav-mobile').addEventListener('click', runNav);

