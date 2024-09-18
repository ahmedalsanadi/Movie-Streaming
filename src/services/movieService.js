import { fetchDataFromTMDB } from '../utile/fetchDataFromTMDB';

// Helper function to format category for the API
const formatCategoryForAPI = (category) => {
  return category.replace(/-/g, '_').toLowerCase();
};

// Fetch movies for a category
export const fetchMovies = async (category) => {
  const formattedCategory = formatCategoryForAPI(category);
  const data = await fetchDataFromTMDB(`/movie/${formattedCategory}`);
  return data.results; // Ensure you're returning the results array
};

// Fetch a single movie by ID
export const fetchMovie = async (id) => {
  const data = await fetchDataFromTMDB(`/movie/${id}`);
  return data; // Assuming it returns a single movie object
};
