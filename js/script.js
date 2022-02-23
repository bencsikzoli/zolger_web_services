console.log("JS loaded");

easyScrollDots({
  fixedNav: false,
  fixedNavId: "",
  fixedNavUpward: false,
  offset: 0,
});

$(document).ready(function() {

  let s_round1 = '.s_round--1';

  $(s_round1).hover(function() {
    $('.b_round--1').toggleClass('b_round_hover');
    return false;
  });

  $(s_round1).click(function() {
    $('.box--1').toggleClass('flipped');
    $(this).addClass('s_round_click');
    $('.s_arrow--1').toggleClass('s_arrow_rotate');
    $('.b_round--1').toggleClass('b_round_back_hover');
    return false;
  });

  $(s_round1).on('transitionend', function() {
    $(this).removeClass('s_round_click');
    $(this).addClass('s_round_back');
    return false;
  });
});
