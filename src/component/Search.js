import React, { useState } from 'react';
import MovieItem from './MovieItem';

const TMDB_API_KEY = '65a62ab0d00029d03ea9b488ff60483c';
const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie';

export default function Search() {
  const [query, setQuery] = useState('');  // State for the search query
  const [movies, setMovies] = useState([]);  // State to store movie search results
  const [error, setError] = useState(null);  // State to store the error message

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch movie data based on the search query
      const response = await fetch(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}&query=${query}`);
      const data = await response.json();
  
      // Check if there are no search results
      if (data.results.length === 0) {
        setError('No results found. Please check the movie name and try again.');
  
        // Set a timeout to clear the error after 3 seconds
        setTimeout(() => {
          setError(null);
        }, 3000);
      } else {
        // Update state with the search results
        setMovies(data.results);
        setError(null); // Clear any previous error
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setError('Error fetching movie data. Please try again later.');
  
      // Set a timeout to clear the error after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div>
      <div className="container my-5">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
          <div style={{ display: 'flex', marginBottom: '8px' }}>
            {/* Input for user to enter search query */}
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {/* Button to trigger the search */}
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </form>

        {/* Display search results or error message */}
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          movies.length > 0 && (
            <div>
              <h2>Search Results</h2>
              {/* Display movies item in a row */}
              <div className="row mt-4">
                {movies.map((movie) => (
                  <div className="col-md-4 mb-3" key={movie.id}>
                    {/* Render a component with movie details (MovieItem) */}
                    <MovieItem
                      id={movie.id}
                      poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      title={movie.title}
                      vote_average={movie.vote_average}
                      release_date={movie.release_date}
                      original_language={movie.original_language}
                      key={movie.key}
                      
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
