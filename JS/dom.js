//movies api
const url = "https://yts.mx/api/v2/list_movies.json?limit=32";
//fetch movies api and use create card func as a callback function
fetch(url, createCards);

//access elements from html
let movieSection = document.querySelector(".movies");
let inputSearch = document.querySelector(".input-search");
let buttSearch = document.querySelector(".butt-search");

//search for movie
buttSearch.addEventListener("click", () => {
  fetch(
    `https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${inputSearch.value}`,
    createCards
  );
});
//function to create element
function createEle(ele, className, parent) {
  let element = document.createElement(ele);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
}

function createCards(data) {
  movieSection.innerHTML = "";
  data.data.movies.forEach((element) => {
    const card = createEle("div", "card", movieSection);

    const img = createEle("img", "img-card", card);
    img.setAttribute("src", `${element.medium_cover_image}`);

    const details = createEle("div", "details", card);

    const movieName = createEle("p", "p-movie-name", details);
    movieName.textContent = `${element.title}`;

    const movieRate = createEle("p", "p-movie-name", details);
    movieRate.textContent = `${element.rating}`;

    const summaryButt = createEle("button", "button", card);
    summaryButt.textContent = "More";
  });
}
