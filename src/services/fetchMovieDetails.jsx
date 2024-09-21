// services/fetchMovieDetails.js
import { fetchDataFromTMDB } from '../util/fetchDataFromTMDB';
export async function fetchMovieDetails(movieId) {
    try {
      const [videos, credits, reviews, recommendations] = await Promise.all([
        fetchDataFromTMDB(`/movie/${movieId}/videos`),
        fetchDataFromTMDB(`/movie/${movieId}/credits`),
        fetchDataFromTMDB(`/movie/${movieId}/reviews`),
        fetchDataFromTMDB(`/movie/${movieId}/recommendations`),
      ]);
  
      return {
        videos,
        cast: credits.cast,
        reviews,
        recommendations,
      };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return {
        videos: null,
        cast: null,
        reviews: null,
        recommendations: null,
      };
    }
  }