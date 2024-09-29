const cardWrapper = document.querySelector(".content-cards");
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')


const films = [
  {
    id: 0,
    title: "Интерстеллар 1",
    original: "Interstellar 2015",
    category: "Фантастика, приключения",
    link: './film.html',
    raiting: 7.8,
    image: "./img/film.jpg",
  },
  {
    id: 1,
    title: "Интерстеллар 2",
    original: "Interstellar 2015",
    category: "Фантастика, приключения",
    limk: './film.html',
    raiting: 7.8,
    image: "./img/film.jpg",
  },
  {
    id: 2,
    title: "Интерстеллар 3",
    original: "Interstellar 2015",
    category: "Фантастика, приключения",
    limk: './film.html',
    raiting: 7.8,
    image: "./img/film.jpg",
  },
];


const render = (array) => {
    console.log(array);
    
  cardWrapper.innerHTML = "";

  array.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="${item.link}" class="content-cards--item">
                <div class="content-cards--item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>

                <div class="content-cards--item--title">
                    <h5>${item.title}, </h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards--item--discription">
                    ${item.category}
                </p>
                <p class="content-cards--item__rating">
                    ${item.raiting}
                </p>
            </a>
        `
    );
  });
};

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)
    ))
})

render(films);

