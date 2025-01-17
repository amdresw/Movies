// Función asincrónica para simular la búsqueda con una promesa
export async function searchMovies(query, movies) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = movies.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
            resolve(results);
        }, 300); // Simula un retraso de 300ms
    });
}
