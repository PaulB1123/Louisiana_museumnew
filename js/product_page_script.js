// window.addEventListener("load", start);

const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("id");
console.log(_id);

const url = `https://kea2020-346b.restdb.io/rest/alabama?q={"_id" : {"$in" : ["${_id}"]}}`;
console.log(url);

const options = {
  headers: {
    "x-apikey": "6140ba5343cedb6d1f97f111",
  },
};

//fetch the data
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showInfo(data);
  })
  .catch((e) => {
<<<<<<< HEAD
    // console.error("An error occured:", e.message);
=======
    console.error("An error occured:", e.message);
>>>>>>> 213be38949d45fbf080b8f03091345c4370f3cde
  });

// populate page
function showInfo(artwork) {
  console.log(artwork);

  artwork.forEach((art) => {
    console.log(art);
    document.querySelector("h1").textContent = art.artist;
    document.querySelector(".main_img").setAttribute("src", art.photo);
    document.querySelector("figcaption").innerHTML =
      art.title + ", " + art.year;
  });
}
