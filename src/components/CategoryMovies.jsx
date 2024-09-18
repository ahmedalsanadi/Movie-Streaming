import React from "react";
import Image from "next/image";

const CategoryMovies = ({ movies, categoryId }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Movies in {categoryId.replace(/-/g, " ")} Category
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={`${imgBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                width={150}
                height={225}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {movie.overview.slice(0, 100)}...
                </p>
                <p className="text-sm text-gray-500">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-sm text-gray-500">
                  Rating: {movie.vote_average}/10
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No movies found
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryMovies;
