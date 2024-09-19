const SingleMovie = ({ movie }) => {
    return (
      <div>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </>
        ) : (
          <p>No movie data available</p>
        )}
      </div>
    );
  };
  
  export default SingleMovie;
  