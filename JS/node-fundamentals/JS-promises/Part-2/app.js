$(function () {
  const baseURL = "https://deckofcardsapi.com/api/deck";


  $.getJSON(`${baseURL}/new/draw/`).then((data) => {
    let { suit, value } = data.cards[0];
    console.log(`You drew a ${value} of ${suit}`);
  });

  let card1 = null;
  $.getJSON(`${baseURL}/new/draw/`)
    .then((data) => {
      card1 = data.cards[0];
      const deckID = data.deck_id;
      return $.getJSON(`${baseURL}/${deckID}/draw/`);
    })
    .then((data) => {
      const card2 = data.cards[0];
      [card1, card2].forEach(function (card) {
        console.log(`${card.value} of ${card.suit}`);
      });
    });
  let deckId = null;
  let $btn = $('button');
  $btn.className = 'btn btn-success';
  let $cardArea = $('#card-area');

  $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $btn.show();
  });
  $btn.on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
      let cardSrc = data.cards[0].image;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
        })
      );
      if (data.remaining === 0) $btn.remove();
    });
  });  

});

