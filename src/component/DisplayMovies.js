import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

const DisplayMovies = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        let url = 'https://api.themoviedb.org/3/discover/movie?api_key=65a62ab0d00029d03ea9b488ff60483c&append_to_response=videos,images';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setMovieData(parsedData.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div>
      <h3>Suggestions</h3>
      <div className="row mt-4">
        {movieData && movieData.map((movie) => (
          <div className="col-md-4 mb-3" key={movie.id}>
            <MovieItem  
              id={movie.id} 
              title={movie.title} 
              poster={movie.poster_path} 
              vote_average={movie.vote_average} 
              release_date={movie.release_date}  
              original_language={movie.original_language} 
              movie_id={movie.id} 
              key={movie.id}
              videoKey={movie.videos?.results[0]?.key} // Use optional chaining to access nested properties safely
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayMovies;
