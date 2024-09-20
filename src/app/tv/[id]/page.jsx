 import CategoryPage from "@/components/CategoryPage";
import { formatCategoryForAPI } from "@/services/formatCategoryForAPI";
import { fetchDataFromTMDB } from "@/util/fetchDataFromTMDB"


const TvPage = async ({ params }) => {
  const { id } = params
  const categories = ["popular", "airing-today", "on-the-air", "top-rated"]

  // Fetch movies or single movie based on `id`
  const isCategory = categories.includes(id)
  
  const formattedCategory = isCategory ? await formatCategoryForAPI(id) : null;
  
  const data = isCategory? await fetchDataFromTMDB(`/tv/${formattedCategory}`) : await fetchDataFromTMDB(`/tv/${id}`);
  // Return the appropriate UI based on whether it's a category or single movie
  return (
    <div>
      {isCategory ? (
       <CategoryPage pageTitle="tv" shows={data.results} categoryId={id} />
       
      ) : data ? (
        // <SingleMovie movie={data} />
        <h1> single page : {data.results}</h1>
      ) : (
        <div>No Tv found</div>
      )}
    </div>
  )
}
