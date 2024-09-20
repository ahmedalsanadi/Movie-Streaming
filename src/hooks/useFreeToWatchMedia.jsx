import { useState, useEffect } from 'react';
import { fetchDataFromTMDB } from '../util/fetchDataFromTMDB'; 

export const useFreeToWatchMedia = (category) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFreeToWatchMedia() {
      setLoading(true);
      setError(null);

      let moviePath = '';
      let tvPath = '';

      if (category === 'movies') {
        moviePath = '/movie/free_to_watch'; // Placeholder path for free movies
      } else if (category === 'tv') {
        tvPath = '/tv/free_to_watch'; 
      }

      try {
        // Fetch both movies and TV shows simultaneously
        const [moviesData, tvData] = await Promise.all([
          fetchDataFromTMDB(moviePath),
          fetchDataFromTMDB(tvPath),
        ]);

        // Combine the results from both responses
        const combinedResults = [
          ...(moviesData?.results || []),
          ...(tvData?.results || []),
        ];

        setMedia(combinedResults);
      } catch (err) {
        setError('Failed to load media');
      } finally {
        setLoading(false);
      }
    }

    fetchFreeToWatchMedia();
  }, [category]);

  return { media, loading, error };
};
