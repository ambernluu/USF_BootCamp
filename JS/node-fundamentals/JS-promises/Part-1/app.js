const baseURL = "http://numbersapi.com"
const favNum = 41;

$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    console.log(data)
});

const nums = [1, 2, 3];
$.getJSON(`${baseURL}/${nums}?json`).then(data => {
    console.log(data);
})

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNum}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});