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