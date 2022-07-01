/*
this function takes in two parameters and returns the difference of the two;
difference(2,2); // 0
difference(0,2); // -2
*/

function difference(x,y){
    return x-y;
}

/*
this function takes in two parameters and returns the product of the two;
product(2,2); // 4
product(0,2); // 0
*/

function product(x,y){
    return x*y;
}

/*
his function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
printDay(4); // "Wednesday"
printDay(41); // undefined
*/

function dayOfWeek(dayNum){
    switch(dayNum){
        case '1': return 'Monday';
        case '2': return 'Tuesday';
        case '3': return 'Wednesday';
        case '4': return 'Thursday';
        case '5': return 'Friday';
        case '6': return 'Saturday';
        case '7': return 'Sunday';
        break;
    }
}

/*
this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
lastElement([1,2,3,4]); // 4
lastElement([]); // undefined
*/

function lastValue(xArray){
    return xArray[(xArray.length -1)];
}

/*
this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”
numberCompare(1,1); // "Numbers are equal"

numberCompare(2,1); // "First is greater"

numberCompare(1,2); // "Second is greater"
*/

function compareNum(x, y){
    if(x > y){
        return "First is greater";
    }
    if(x<y){
        return "Second is greater";
    }
    else return "Numbers are equal";
}

/*
this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. 
The function returns the number of times that letter appears in the word. The function should be case insensitive 
(does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2
*/

function singleLetterCount(word, letter){
    let count = 0;
    for(i=0;i<word.length;i++){
        if(word[i].toLowerCase() === letter.toLowerCase()){
            count++;
        }
    }
    return count;
}

/*
this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
*/

function multipleLetterCount(str){

}