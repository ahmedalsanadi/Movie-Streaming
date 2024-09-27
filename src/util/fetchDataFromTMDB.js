// fetchDataFromTMDB.js

const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY //this is an auth key existed in .env.local // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3"

export async function fetchDataFromTMDB(endpoint) {
  const url = `${BASE_URL}${endpoint}${endpoint.includes("?") ? "&" : "?"}api_key=aee90468ae7be488519967b0af3e2f59`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching data from ${url}. Status: ${error.message}`)
    throw error
  }
}