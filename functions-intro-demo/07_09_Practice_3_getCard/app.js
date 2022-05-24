// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object


function randomize(values){
    let value = [Math.floor(Math.random() * values.length)];
    return value;
}

function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','K','Q','A'];
    const suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];

    card = {'Value' : values[randomize(values)], 'Suit' : suits[randomize(suits)]};
    return card;
}

