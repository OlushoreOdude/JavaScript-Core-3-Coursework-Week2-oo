/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

//given api seems to not be working, will tryit again later
//used another https link to test

let rand = Math.floor(Math.random() * 4);
console.log(rand);
let testVal = rand === 0 ? rand + 1 : rand;
console.log(testVal, "testVal");

fetch(`https://mdn.github.io/dom-examples/fetch/fetch-text/page${testVal}.txt`)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("check api connection");
    } else {
      return response.text();
    }
  })
  .then(function (greeting) {
    // Write the code to display the greeting text here
    let pDomEl = document.getElementById("greeting-text");
    pDomEl.innerText = greeting;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch(`https://codeyourfuture.herokuapp.com/api/greetings`)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("check api connection for cyf");
    } else {
      return response.text();
    }
  })
  .then(function (greeting) {
    // Write the code to display the greeting text here
    let pDomEl2 = document.getElementById("greeting-text2");
    pDomEl2.innerText = greeting;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
