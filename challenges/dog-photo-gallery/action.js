const parentBody = document.querySelector("body");
let divMain = document.createElement("div");
divMain.setAttribute("id", "divMain");
let buttonEl = document.createElement("button");
buttonEl.innerText = "Add More";
buttonEl.addEventListener("click", addMoreFunc);

let buttonElRem = document.createElement("button");
buttonElRem.innerText = "Remove";
buttonElRem.addEventListener("click", removeLastChiled);

parentBody.append(buttonEl, buttonElRem, divMain);

function addMoreFunc() {
  let newDiv = document.createElement("div");
  // - commented out test innerText, can remove.
  //newDiv.innerText = "test";
  newDiv.setAttribute("id", `${Math.random() * 30}`);
  newDiv.classList.add("new-div");
  divMain.append(newDiv);
  console.log(newDiv);

  //let newImage = document.createElement("img");
  //newImage.src = "";

  asyncImg(newDiv);
}

//-- function removes element from the DOM,
//--funciton alers and exits if dom ref variable returns null
//Note: variable refrence will return null if assinged DOM,
//node does not exist.
//Note: assigning funciton to avariable prevents hoisting
function removeLastChiled() {
  const node = document.getElementById("divMain").lastElementChild;
  console.log(node, "node");
  if (node === null) {
    alert("nothing left to remove");
    return;
  }
  node.remove();
}

const asyncImg = async (elem) => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");

    if (res.status === 404) throw new Error("image not found");

    const data = await res.json();

    console.log(data, " async js syntax image data");
    let newImage = document.createElement("img");
    let { message: imgSRC } = data;
    console.log(imgSRC, "= image src");
    newImage.src = imgSRC;
    console.log(newImage);
    elem.append(newImage);
  } catch (err) {
    console.error(err);
  }
};
