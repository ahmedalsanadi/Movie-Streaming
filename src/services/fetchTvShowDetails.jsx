// services/fetchTVShowDetails.js

import { fetchDataFromTMDB } from '../util/fetchDataFromTMDB';

export async function fetchTVShowDetails(tvShowId) {
  try {
    const [details, videos, credits, reviews, recommendations] = await Promise.all([
      fetchDataFromTMDB(`/tv/${tvShowId}`),
      fetchDataFromTMDB(`/tv/${tvShowId}/videos`),
      fetchDataFromTMDB(`/tv/${tvShowId}/credits`),
      fetchDataFromTMDB(`/tv/${tvShowId}/reviews`),
      fetchDataFromTMDB(`/tv/${tvShowId}/recommendations`)
    ]);

    return {
      ...details,
      videos,
      cast: credits.cast,
      reviews,
      recommendations,
      seasons: details.seasons
    };
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    throw new Error('Failed to fetch TV show details');
  }
}