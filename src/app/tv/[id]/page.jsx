import { fetchMovies, fetchMovie } from "@/services/movieService"
import CategoryMovies from "@/components/CategoryMovies"
import SingleMovie from "@/components/SingleMovie"

const TvPage = async ({ params }) => {
  const { id } = params
  const categories = ["popular", "airing_today", "on_the_air", "top_rated"]

  // Fetch movies or single movie based on `id`
  const isCategory = categories.includes(id)
  const data = isCategory ? await fetchMovies(id) : await fetchMovie(id)

  // Return the appropriate UI based on whether it's a category or single movie
  return (
    <div>
      {isCategory ? (
        <CategoryMovies movies={data} categoryId={id} />
      ) : data ? (
        <SingleMovie movie={data} />
      ) : (
        <div>No Tv found</div>
      )}
    </div>
  )
}

export default TvPage
