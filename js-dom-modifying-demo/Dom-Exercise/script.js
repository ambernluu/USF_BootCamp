document.getElementById('container');

document.querySelector('#container');

document.getElementsByClassName('second');

document.querySelector('ol').lastElementChild;

const container = document.getElementById('container');
container.innerText = "Hello!";

const footer = document.querySelector('.footer');
footer.classList.add('main');

footer.classList.remove('main');

const newLi = document.createElement('li');

newLi.innerText = 'four';

const ul = document.querySelector('ul')
ul.append(newLi)

let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

let footer = document.querySelector(".footer");
footer.remove();

