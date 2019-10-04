/* eslint-disable no-console */
function burgerClick() {
  $('.burger').click(function() {
    $('.menulinks').toggleClass('hidden');
  });
}

function closeMenu() {
  $('.nav').on('click', 'li', function() {
    $('.menulinks').toggleClass('hidden');
  });
}

function projectHover() {
  $('.project').hover(function() {
    $(this).find('.overlay').toggleClass('hidden');
  }, function() {
    $(this).find('.overlay').toggleClass('hidden');
  });
}

function doIt() {
  burgerClick();
  closeMenu();
  projectHover();
}

$(doIt);