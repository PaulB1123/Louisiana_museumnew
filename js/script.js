///////////////////////////////////////////////////////////////
//here starts the functions for fetching the data
  const url = "https://kea2020-346b.restdb.io/rest/alabama?max=10";

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

// clone the template that we have for the 6 bands

function handleData(paintings) {
  //here I grab each on of the elements from the array
  paintings.forEach((paint) => {
    //here I console log it to make sure everything is okay
    console.log(paint);
    //here I take the template that I already have
    const template = document.querySelector("template").content;
    //here I clone it
    const clone = template.cloneNode(true);
    //here I add all the data from database to the existing tags from the template
    clone.querySelector("h2").textContent = paint.period;
    clone.querySelector("img").setAttribute("src", paint.photo);
    clone
      .querySelector("img")
      .setAttribute("alt", paint.title + ", by " + paint.artist);
    //here I add the id of the band to have it on the http so it can be selected as a single element
    clone.querySelector(
      ".templates a"
    ).href = `productList.html?period=${paint.period}`;
    //here I place all my clones in the main
    const mainEl = document.querySelector("main");
    //here I show the clones on main
    mainEl.appendChild(clone);

    // bl bl
  });
}

