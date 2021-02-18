// tabs
const tabTitles = document.querySelectorAll('.tab__title');
const tabBlocks = document.querySelectorAll('.tab__block');

const deactivationTabs = () => {
    tabTitles.forEach(tabTitle => tabTitle.classList.remove('active'));
    tabBlocks.forEach(tabBlock => tabBlock.classList.remove('active'));
};

tabTitles.forEach((tabBlock, i) => tabBlock.addEventListener("click", e => {
    deactivationTabs();
    tabBlock.classList.add('active');
    tabBlocks[i].classList.add('active');
    e.preventDefault();
}));


// slider
new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
    touchRatio: 2,
    grabCursor: true,
    loop: true,
});


const profileLink = document.querySelector('.profile-link');
const profileBlock = document.querySelector('.profile');


const toggleProfileBlock = () => {
    profileBlock.classList.toggle('active');
};


profileLink.addEventListener('click', (e) => {
    toggleProfileBlock();
    e.preventDefault();
});

document.addEventListener('click', (e) => {
    if (!(e.target == profileBlock || profileBlock.contains(e.target)) && !(e.target === profileLink) && profileBlock.classList.contains('active')) {
        toggleProfileBlock();
    }
});




