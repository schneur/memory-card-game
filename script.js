var numbers = _.range(0, 19);
var emojiCards = ['', "&#x1F349","&#127826","&#129409","&#8986", "&#128760","&#129413","&#128758","&#129358","&#129417", "&#129380", "&#129346", "&#129417;", "&#129472;", "&#129510;", "&#129322;", "&#129312", "&#129312"]
var cards = {};
for (var i = 1; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    cards[numbers[i]] = emojiCards[i];
  } else {
    cards[numbers[i]] = emojiCards[i-1];
  }
}
console.log(numbers)
console.log(cards)

//$('body').html(cards.src)*/