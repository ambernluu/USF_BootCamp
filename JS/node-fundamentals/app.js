// const url = 'https://jservice.io/api/';

// axios.get(`${url}/categories?count=5`)
//     .then(res => {
//         console.log(res.data);
//         return axios.get(`${url}/category?id=2`)
//     })
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => console.log("REJECTED!!", err));

// function wait3seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000);
//     })    
// }

// wait3seconds()
//     .then(() => console.log("ALL DONE!!"))
//     .catch(() => console.log("ERROR"))

const h1 = document.querySelector('h1');

function changeColor(element, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.style.color = color;
            resolve()
        },1000)
    })
}

changeColor(h1, 'red')
    .then(() => changeColor(h1, 'orange'))
    .then(() => changeColor(h1, 'yellow'))
    .then(() => changeColor(h1, 'green'))
    .then(() => changeColor(h1, 'blue'))
    .then(() => changeColor(h1, 'indigo'))
    .then(() => changeColor(h1, 'violet'))