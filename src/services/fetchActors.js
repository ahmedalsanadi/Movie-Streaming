// services/fetchActors.js
import { fetchDataFromTMDB } from "./../util/fetchDataFromTMDB"

export const fetchPopularActors = async () => {
  const data = await fetchDataFromTMDB("/person/popular")
  return data.results // Adjust this according to the structure of your API response
}
