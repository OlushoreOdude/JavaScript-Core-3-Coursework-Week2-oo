const bodyMain = document.querySelector("body");

const divMain = document.createElement("div");
divMain.innerText = " waiting for image";
bodyMain.appendChild(divMain);

// note: fetch is asyncronous by default
//innerText on a node removes all of the node's children and replaces them with a single text node with the given string value.
//note: fetch is a web API that returns a  promis
const displayImg = () => {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("check api connection");
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data, "fetch API image data");
      divMain.innerText = "";

      const imageDiv = document.createElement("img");
      imageDiv.src = data.img;
      divMain.append(imageDiv);
      asyncImg();
    })
    .catch((err) => {
      console.error(err);
    });
};

//displayImg();
console.log(divMain.innerText);
//asyncronous
//Note: async amait is a js syntax for  handling pomises,
// the promises are handles diffenley
const asyncImg = async () => {
  try {
    const res = await fetch("https://xkcd.now.sh/?comic=latest");

    if (res.status === 404) throw new Error("image not found");

    const data = await res.json();

    console.log(data, " async js syntax image data");
    let newImage = document.createElement("img");
    newImage.src = data.img;
    console.log(newImage);
    divMain.append(newImage);
    console.log(divMain);
    console.log(`${divMain}`);
    console.log(divMain.innerText);
  } catch (err) {
    console.error(err);
  }
};

//asyncImg();

displayImg();
