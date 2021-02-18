"use strict";

// tabs
var tabTitles = document.querySelectorAll('.tab__title');
var tabBlocks = document.querySelectorAll('.tab__block');

var deactivationTabs = function deactivationTabs() {
  tabTitles.forEach(function (tabTitle) {
    return tabTitle.classList.remove('active');
  });
  tabBlocks.forEach(function (tabBlock) {
    return tabBlock.classList.remove('active');
  });
};

tabTitles.forEach(function (tabBlock, i) {
  return tabBlock.addEventListener("click", function (e) {
    deactivationTabs();
    tabBlock.classList.add('active');
    tabBlocks[i].classList.add('active');
    e.preventDefault();
  });
}); // slider

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev'
  },
  autoplay: {
    delay: 2000
  },
  touchRatio: 2,
  grabCursor: true,
  loop: true
});