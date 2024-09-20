import CategoryPage from "@/components/CategoryPage";
import { formatCategoryForAPI } from "@/services/formatCategoryForAPI";
import { fetchDataFromTMDB } from "@/util/fetchDataFromTMDB"
import SingleMovie from '@/components/SingleMovie';

const MoviePage = async ({ params }) => {
  const { id } = params;
  const categories = ['popular', 'top-rated', 'upcoming', 'now-playing'];

  // Fetch movies or single movie based on `id`
  const isCategory = categories.includes(id);
  const formattedCategory = isCategory ? await formatCategoryForAPI(id) : null;

  const data = isCategory? await fetchDataFromTMDB(`/movie/${formattedCategory}`) : await fetchDataFromTMDB(`/movie/${id}`);

  // Return the appropriate UI based on whether it's a category or single movie
  return (
    <div>
      {isCategory ? (
        <CategoryPage pageTitle="movie" shows={data.results} categoryId={id} />
      ) : data ? (
        <SingleMovie movie={data} />
      ) : (
        <div>No movie found</div>
      )}
    </div>
  );
};

export default MoviePage;
