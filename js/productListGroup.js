window.addEventListener("load", start);

const urlParams = new URLSearchParams(window.location.search);
const period = urlParams.get("period");
console.log(period);

const url = `https://kea2020-346b.restdb.io/rest/alabama?q={"period" : {"$in" : ["${period}"]}}`;
console.log(url);

const options = {
  headers: {
    "x-apikey": "6140ba5343cedb6d1f97f111",
  },
};

//fetch de data
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

// clone the template that we have for every period
function handleData(period) {
  //here I grab each on of the elements from the array
  period.forEach((art) => {
    //here I console log it to make sure everything is okay
    console.log(art);
    //here I take the template that I already have
    const template = document.querySelector("#period_template").content;
    //here I clone it
    const copy = template.cloneNode(true);
    //here I add all the data from database to the existing tags from the template

    document.querySelector("h1").textContent = art.period;
    copy.querySelector("h2").textContent = art.artist;
    copy.querySelector("h3").textContent = art.title;
    copy.querySelector("img").setAttribute("src", art.photo);
    copy
      .querySelector("img")
      .setAttribute("alt", art.title + ", by " + art.artist);
    //here I add the id of the band to have it on the http so it can be selected as a single element
    copy
      .querySelector("a")
      .setAttribute("href", "product_page.html?id=" + art._id);
    //here I place all my clones in the main
    const mainEl = document.querySelector("main");
    //here I show the clones on main
    mainEl.appendChild(copy);
  });
}

function start() {
  console.log("start");
  document.querySelector(".filter").addEventListener("click", openFilters);
}

function openFilters() {
  console.log("filter opened");
  document.querySelector("#filters-menu").classList.remove("d-none");
  document.querySelector(".filter").classList.add("bg-bl");
  document.querySelector(".fa-chevron-down").classList.add("rot");
  document.querySelector(".filter").removeEventListener("click", openFilters);
  document.querySelector(".filter").addEventListener("click", closeFilters);
}

function closeFilters() {
  console.log("filer closed");
  document.querySelector("#filters-menu").classList.add("d-none");
  document.querySelector(".filter").classList.remove("bg-bl");
  document.querySelector(".fa-chevron-down").classList.remove("rot");
  document.querySelector(".filter").removeEventListener("click", closeFilters);
  document.querySelector(".filter").addEventListener("click", openFilters);
}
