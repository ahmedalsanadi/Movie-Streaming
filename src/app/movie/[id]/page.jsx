import { fetchMovies, fetchMovie } from '@/services/movieService'; 
import CategoryMovies from '@/components/CategoryMovies'; 
import SingleMovie from '@/components/SingleMovie'; 

const MoviePage = async ({ params }) => {
  const { id } = params;
  const categories = ['popular', 'top-rated', 'upcoming', 'now-playing'];

  // Fetch movies or single movie based on `id`
  const isCategory = categories.includes(id);
  const data = isCategory ? await fetchMovies(id) : await fetchMovie(id);

  // Return the appropriate UI based on whether it's a category or single movie
  return (
    <div>
      {isCategory ? (
        <CategoryMovies movies={data} categoryId={id} />
      ) : data ? (
        <SingleMovie movie={data} />
      ) : (
        <div>No movie found</div>
      )}
    </div>
  );
};

export default MoviePage;
