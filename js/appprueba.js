// Archivo js/app.js

document.addEventListener('DOMContentLoaded', function () {
    // Datos de las películas
    const movies = [
        {
            title: "Interstella 5555",
            genre: "Animated",
            imageUrl: "/images/5555.jpg",
            description: "The 5tory of the 5ecret 5tar 5ystem"
        },
        {
            title: "Ready Player One",
            genre: "Sci-Fi",
            imageUrl: "/images/RP1.jpg",
            description: "Sci-Fi adventure based on the popular novel"
        },
        {
            title: "The Batman",
            genre: "Action",
            imageUrl: "/images/batman2.jpg",
            description: "The new Batman movie starring Robert Pattinson"
        },
        // Agrega más películas según sea necesario
    ];

    const movieGrid = document.querySelector('.movie-grid'); // Selecciona el contenedor de las películas

    // Genera las carátulas de las películas
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Crea el HTML de cada película
        movieCard.innerHTML = `
            <img src="${movie.imageUrl}" alt="${movie.title}">
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

    // Función para mostrar el pop-up
    function showPopup(movie) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class="popup-content">
                <button class="close-btn">X</button>
                <img src="${movie.imageUrl}" alt="${movie.title}" />
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <p>Genre: ${movie.genre}</p>
            </div>
        `;
        
        document.body.appendChild(popup);

        // Cerrar el pop-up al hacer clic en el botón de cerrar
        const closeBtn = popup.querySelector('.close-btn');
        closeBtn.addEventListener('click', function() {
            popup.remove();
        });
    }
});
