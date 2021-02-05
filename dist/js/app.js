"use strict";

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
});