export function showPopup(movie) {
    document.getElementById('popup-image').src = movie.image;
    document.getElementById('popup-title').textContent = movie.title;
    document.getElementById('popup-summary').textContent = movie.summary;
    document.getElementById('popup-cast').innerHTML = movie.cast.map(actor => `<li>${actor}</li>`).join('');
    document.getElementById('popup-duration').textContent = `Duration: ${movie.duration}`;

    // Mostrar el pop-up
    document.getElementById('popup').classList.remove('hidden');
}

// Cerrar el pop-up
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});