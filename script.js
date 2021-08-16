var numbers = _.range(0, 31);
var emojiCards = ['', "&#x1F349","&#127826","&#129409","&#8986", "&#128760","&#129413","&#128758","&#129358","&#129417", "&#129380", "&#129346", "&#129417;", "&#129472;", "&#129510;", "&#129322;", "&#129312", "&#128012;", "&#127914","&#127923", "&#127930", "&#128018", "&#128640","&#128658;", "&#129313;", "&#9918", "&#129489;", "&#129414;", "&#128674;", "&#128048;", "&#128043;", "&#128029;"]

var cards = {};

for (var i = 1; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    cards[numbers[i]] = emojiCards[i];
  } else {
    cards[numbers[i]] = emojiCards[i-1];
  }
};

var shuffledCards = _.shuffle(cards);

console.log(numbers);
console.log(cards);

for (var property in shuffledCards) {
  if (property % 5 == 0) {
  $('.game').append('<div class="row justify-content-around text-center my-3"></div>')
  };
  $('.row:last').append('<div class="col-2 card"><div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back">' + shuffledCards[property] +'</div></div></div>');
};

$('.playAgain').hide();
var cardsFlipped = 0;
var timeout = null;
var currentCards = [];
var cardsLeft = 30;
var bestTime;

var checkFlippedCards = function () {
  if (!timeout) {
    if (cardsFlipped == 2) {
      timeout = window.setTimeout(function () {
      checkIfMatch();
      flipCards();
      timeout = null;
      }, 900);
    };
  };
};

var checkIfMatch = function () {
  if (currentCards[0] == currentCards[1]) {
    cardsLeft -= 2;
    $('.cardsLeft').html('cards left: ' + cardsLeft)
    $('.currentCard').hide();
    checkIfWon();
  }
  currentCards = [];
};

var flipCards = function () {
  $(".flip-card-inner").removeClass("flipped");
  $(".flip-card-inner").removeClass('currentCard');
  cardsFlipped = 0;
};

var checkIfWon = function () {
 if (cardsLeft == 0) {
   window.clearInterval(timer);
   $('.header').html('congratulations!\nyou won!');
   if (seconds < bestime) {
     bestTime = seconds;
   };
   $('bestTime').html('your best time: ' + seconds);
   $('.playAgain').show();
 }
}

$(".flip-card-inner").click(function(){
  startTimer();
  if (cardsFlipped < 2 ) {
    $(this).toggleClass("flipped");
    $(this).toggleClass('currentCard');
    currentCards.push($(this).find('.flip-card-back').html());
    console.log(currentCards);
    cardsFlipped += 1;
    checkFlippedCards();
  }
});

var seconds = 0;
var timer = null;     

var startTimer = function () {
  if (!timer) {
    timer = setInterval(function () {
      seconds++;
      $('.timer').html('Time: ' + seconds);
    }, 1000);
  }
};

var playAgain = function () {
  $('.playAgain').hide();
  cardsFlipped = 0;
  cardsLeft = 30;
  seconds = 0;
};