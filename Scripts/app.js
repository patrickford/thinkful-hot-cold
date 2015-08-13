$(document).ready(function () {
  'use strict';

  var multiplier = 100;
  var randomNum = Math.ceil(Math.random() * 100);
  var SCALE = 32;
  var quotes = [
    'Your focus determines your reality.',
    'Do... or do not. There is no try.',
    'Somebody has to save our skins.',
    'In my experience there is no such thing as luck.',
    'I find your lack of faith disturbing.',
    'I’ve got a bad feeling about this.',
    'It’s a trap!',
    'Your eyes can deceive you. Don’t trust them.',
    'Stay on target.',
    'Luminous beings are we, not this crude matter.',
    'R2-D2, you know better than to trust a strange computer!',
    'I have a bad feeling about this.',
    'That’s no moon.',
  ];

  $('#ratings').mouseenter(function () {

  });

  if (randomNum <= 50) {
    multiplier = 100 - randomNum;
  } else {
    multiplier = randomNum;
  }

  var incriment = SCALE / multiplier;

  $('#input').keyup(function (event) {
    if (event.keyCode === 13) {
      $('#button').click();
    }
  });

  $('#button').click(function () {
    var userInput = Number($('#input').val());
    var difference = Math.abs(randomNum - userInput);
    var height = SCALE - difference * incriment + 'rem';

    $('#taunt').text(function () {
      var quoteNum = Math.round(Math.random() * quotes.length);

      return quotes[quoteNum];
    });

    $('#taunt').fadeTo('slow', 1);
    $('#taunt').fadeTo('slow', 0);

    if (userInput >= 1 && userInput <= 100) {
      $('#slider').animate({
        'bottom': height,
      }, 'slow');
    }

    if (difference === 0) {
      $('#pulldown').slideDown('slow', function () {});
    }

    $('#input').select();
  });
});
