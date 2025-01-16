import { movies } from "./movies.js";
import { showPopup } from "./popup.js";

document.addEventListener('DOMContentLoaded', function () {
    const movieGrid = document.querySelector('.movie-grid'); // Selecciona el contenedor de las películas

    // Genera las carátulas de las películas
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Crea el HTML de cada película
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
            </div>
        `;

        // Agregar cada tarjeta de película a la cuadrícula
        movieGrid.appendChild(movieCard);

        // Si quieres que el pop-up se active al hacer clic en la imagen
        const movieImage = movieCard.querySelector('img');
        movieImage.addEventListener('click', () => {
            showPopup(movie);
        });
    });
})
