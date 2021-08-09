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
  $('.container-fluid').append('<div class="row justify-content-around text-center my-3"></div>')
  };
  $('.row:last').append('<div class="col-2 card"><div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back">' + shuffledCards[property] +'</div></div></div>');

 // console.log(`${property}: ${object[property]}`);
 
};

var cardsFlipped = 0;
var timeout = null;
var checkFlippedCards = function () {
  if (!timeout) {
    if (cardsFlipped == 2) {
      timeout = window.setTimeout(function () {
      flipCards();
      timeout = null;
      }, 900);
    };
  };
};


var flipCards = function () {
  $(".flip-card-inner").removeClass("flipped");
  cardsFlipped = 0;
}

$(".flip-card-inner").click(function(){
  if (cardsFlipped < 2 ) {
    $(this).toggleClass("flipped");
    cardsFlipped += 1;
    checkFlippedCards();
  }
});
