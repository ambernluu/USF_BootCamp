
// #1
async function getNumberFact() {
  const baseURL = "http://numbersapi.com"
  const favNum = 41;

  let res = await axios.get(`${baseURL}/${favNum}`);
  console.log(res);  
}
//getNumberFact();

// #2
async function getNumbersFacts() {
  const baseURL = "http://numbersapi.com"

  let { data: n1 } = await axios.get(`${baseURL}/4`);
  console.log(n1);

  let { data: n2 } = await axios.get(`${baseURL}/8`);
  console.log(n2);
  
  let { data: n3 } = await axios.get(`${baseURL}/12`);
  console.log(n3);
}
//getNumbersFacts();

// #3
async function getFourFacts() {
  const baseURL = "http://numbersapi.com"
  const favNum = 41;

  let facts = await Promise.all(
    Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNum}`))
  );

  facts.forEach(data => $("body").append(`<p>${data.data}</p>`));
}
getFourFacts();