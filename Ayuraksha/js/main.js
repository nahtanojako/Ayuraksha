(function(){
  'use strict'

  let header, headerHeight;

  header = document.querySelector('.main-header');
  headerHeight = header.clientHeight;

  // Fixed Height at page scroll
  window.onscroll = function(){
    if(window.pageYOffset > headerHeight){
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }

})()