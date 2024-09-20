import { useState, useEffect } from 'react';
import { fetchDataFromTMDB } from '../util/fetchDataFromTMDB';

export const usePopularMedia = (category) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPopularMedia() {
      setLoading(true);
      setError(null);

      // Define paths for movies and TV shows based on the category
      let moviePath = '';
      let tvPath = '';

      if (category === 'streaming') {
        moviePath = '/movie/popular';
        tvPath = '/tv/popular';
      } else if (category === 'on_tv') {
        moviePath = '/movie/popular'; // Placeholder for streaming services like Netflix, but TMDB doesn't provide category-based filters.
        tvPath = '/tv/popular';
      } else if (category === 'for_rent') {
        // As explained before, there is no direct endpoint for "For Rent", so we'll fetch popular movies and TV shows instead.
        moviePath = '/movie/popular';
        tvPath = '/tv/popular';
      } else if (category === 'in_theaters') {
        moviePath = '/movie/now_playing';
        tvPath = '/tv/popular'; // Placeholder, as "In Theaters" doesn't apply to TV shows.
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

        // Sort the combined results by vote average (optional)
        const sortedResults = combinedResults.sort((a, b) => b.vote_average - a.vote_average);

        setMedia(sortedResults);
      } catch (err) {
        setError('Failed to load media');
      } finally {
        setLoading(false);
      }
    }

    fetchPopularMedia();
  }, [category]);

  return { media, loading, error };
};
