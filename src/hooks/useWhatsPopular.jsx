import { useState, useEffect } from "react";
import { fetchDataFromTMDB } from "../util/fetchDataFromTMDB";

export const useWhatsPopular = (popularCategory) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesAndShows = async () => {
      let movieEndpoint = '';
      let tvEndpoint = '';

      // Determine the correct API endpoints based on the selected category
      switch (popularCategory) {
        case 'streaming':
          movieEndpoint = `/movie/popular?with_watch_monetization_types=flatrate`;
          tvEndpoint = `/tv/popular?with_watch_monetization_types=flatrate`;
          break;
        case 'on_tv':
          movieEndpoint = `/movie/popular`;
          tvEndpoint = `/tv/popular`;
          break;
        case 'for_rent':
          movieEndpoint = `/movie/popular?with_watch_monetization_types=rental`;
          tvEndpoint = `/tv/popular?with_watch_monetization_types=rental`;
          break;
        case 'in_theaters':
          movieEndpoint = `/movie/now_playing`;
          tvEndpoint = `/tv/on_the_air`;
          break;
        default:
          movieEndpoint = `/movie/popular`;
          tvEndpoint = `/tv/popular`;
      }

      try {
        // Fetch both movies and TV shows concurrently
        const [moviesData, tvData] = await Promise.all([
          fetchDataFromTMDB(movieEndpoint),
          fetchDataFromTMDB(tvEndpoint),
        ]);

        if (moviesData && tvData) {
          // Combine movies and TV shows, then randomize the content
          const combinedContent = [...moviesData.results, ...tvData.results];
          setContent(combinedContent.sort(() => Math.random() - 0.5));
        } else {
          setError("Failed to load popular content.");
        }
      } catch (error) {
        setError("An error occurred while fetching popular content.");
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesAndShows();
  }, [popularCategory]);

  return { content, loading, error };
};
