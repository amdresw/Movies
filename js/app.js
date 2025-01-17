import { movies } from "./movies.js";
import { showPopup } from "./popup.js";
import { searchMovies } from './search.js';

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

        // pop-up se activa al hacer clic en la imagen
        const movieImage = movieCard.querySelector('img');
        movieImage.addEventListener('click', () => {
            showPopup(movie);
        });
    });
})

// Referencias al DOM
const searchBar = document.querySelector('.search-bar input'); // Ajusta al selector real
const resultsContainer = document.querySelector('.results'); // Ajusta al selector real

// Evento para manejar la búsqueda
searchBar.addEventListener('input', async () => {
    const query = searchBar.value.trim();
    if (query) {
        try {
            const results = await searchMovies(query, movies); // Espera el resultado de la búsqueda
            displaySearchResults(results); // Muestra los resultados en la interfaz
        } catch (error) {
            console.error('Error en la búsqueda:', error);
        }
    } else {
        resultsContainer.innerHTML = ''; // Limpiar resultados si no hay búsqueda
    }
});

// Función para mostrar los resultados en la interfaz
function displaySearchResults(results) {
    resultsContainer.innerHTML = ''; // Limpia resultados anteriores

    if (results.length > 0) {
        resultsContainer.classList.add('show'); // Muestra el contenedor si hay resultados
        results.forEach(movie => {
            const resultItem = document.createElement('div');
            resultItem.textContent = movie.title; // Muestra el título de la película
            resultItem.classList.add('result-item'); // Clase opcional para estilos
            resultItem.addEventListener('click', () => {
                showPopup(movie); // Muestra los detalles en un popup
                clearSearch(); // Limpia la barra y oculta resultados
            });
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.classList.remove('show'); // Oculta el contenedor si no hay resultados
    }
}

// Función para limpiar la barra de búsqueda y ocultar resultados
function clearSearch() {
    searchInput.value = ''; // Limpia el campo de entrada
    resultsContainer.innerHTML = ''; // Limpia los resultados
    resultsContainer.classList.remove('show'); // Oculta el contenedor
}

// Escucha para manejar el input en la barra de búsqueda
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query === '') {
        clearSearch(); // Limpia todo si no hay texto
    } else {
        searchMovies(query) // Llama a la búsqueda asincrónica
            .then(results => {
                // Filtra resultados relevantes (si es necesario)
                const filteredResults = results.filter(movie =>
                    movie.title.toLowerCase().includes(query)
                );
                displaySearchResults(filteredResults); // Muestra resultados filtrados
            })
            .catch(err => console.error('Error fetching search results:', err));
    }
});



