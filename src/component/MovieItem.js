import React, { useState } from 'react';
import PlayMovie from './PlayMovie';

const MovieItem = ({ id, title, vote_average, poster, release_date, original_language, videoKey }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatchNow = () => {
    setShowTrailer(true);
  };

  const handleImageError = (e) => {
    e.target.src = "/err.jpg"; // Correct path to your default image
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src={`https://image.tmdb.org/t/p/w500${poster}`} 
          alt="Movie Poster" 
          onError={handleImageError} 
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="fst-italic" style={{ marginBottom: '8px' }}>
            <p style={{ margin: '0' }}>Rated: {vote_average}</p>
            <p style={{ margin: '0' }}>Release Date: {release_date}</p>
            <p style={{ margin: '0' }}>Language: {original_language}</p>
          </div>
          <button onClick={handleWatchNow} className="btn btn-dark">
            Play Trailer
          </button>
        </div>
      </div>

      {showTrailer && <PlayMovie title={title} videoKey={videoKey} id={id} onClose={() => setShowTrailer(false)} />}
    </div>
  );
};

export default MovieItem;
