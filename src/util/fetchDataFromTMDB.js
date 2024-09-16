// function to get data from the TMDB API to be shared in the whole project

const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;    //this is an auth key existed in .env.local
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

//pass a suitable (path) -> to get the required data 
export const fetchDataFromTMDB = async (path) => {

  const url = `${TMDB_BASE_URL}${path}?api_key=${TMDB_API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};

