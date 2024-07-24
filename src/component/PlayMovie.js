import React from 'react';


const PlayMovie = ({ title,videoKey, onClose }) => {
  const handleCloseTrailer = () => {
    onClose(); // Call the onClose function passed as a prop to close the trailer
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title} Trailer</h5>
            <button type="button" className="close" onClick={handleCloseTrailer} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <iframe
              title={`${title} Trailer`}
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videoKey}`}
              allowFullScreen
              onError={(e) => console.error("YouTube Embed Error:", e)}
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMovie;
