const apiKey = 'd33ff701';

const searchBtn = document.getElementById('search-btn');
const movieInput = document.getElementById('movie-input');

searchBtn.addEventListener('click', () => {
    const movieTitle = movieInput.value;

    fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const movieResult = document.getElementById('movie-results');
        movieResult.innerHTML = '';  // Clear previous results

        if (data.Search) {  // Check if data.Search exists
            data.Search.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');
                movieDiv.innerHTML = `
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <button onclick="getMovieDetails('${movie.imdbID}')">More Info</button>
                `;
                movieResult.appendChild(movieDiv);
            });
        } else {
            movieResult.innerHTML = `<p>No movies found.</p>`;
        }
    })
    .catch(error => console.log('error', error));
});
function getMovieDetails(movieID) {
    fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(movie => {
            // Display more detailed information about the movie
            alert(`
                Title: ${movie.Title}
                Director: ${movie.Director}
                Actors: ${movie.Actors}
                Plot: ${movie.Plot}
            `);
        })
        .catch(error => console.error('Error:', error));
}
