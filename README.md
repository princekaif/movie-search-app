# Movie Search App 🎬
A movie search application that allows users to search for movies, displaying details like title, poster, and release year. The app fetches data from the OMDB (Open Movie Database) API.

## Features
- 🎞 Movie Search: Search for movies by title.
- 🖼 Poster Display: Display the movie poster along with the title and release year.
- 🔍 Detailed Information: Fetch additional movie details like the plot, director, and actors upon clicking "More Info."
- 🎨 Responsive Design: Adaptable UI for both mobile and desktop devices.


## Tech Stack

- HTML5: For the structure of the app.
- CSS3: For styling the application.
- JavaScript (ES6+): For making API calls and updating the DOM.
- OMDB API: Retrieves movie data for the app.

## Installation & Setup

- Clone the repository:

```bash
 git clone https://github.com/princekaif/movie-search-app.git

```
- Navigate into the project directory:
```bash
cd movie-search-app
```
- Open the index.html file in your browser: You can simply double-click the index.html file or run a live server from your code editor (like VSCode's Live Server extension).


## Usage Instructions

- Enter a movie title into the search input.
- Click the Search button.
- The movie results will appear below the search input, displaying the movie poster, title, and release year.
- Click on More Info to fetch additional details like plot, actors, and director.


## API Reference

#### Get all items

```http
 http://www.omdbapi.com/apikey.aspx
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
 const apiKey = 'your-api-key';
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


