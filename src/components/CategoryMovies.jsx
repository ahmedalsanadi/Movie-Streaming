import React from "react";
import Image from "next/image";

const CategoryMovies = ({ movies, categoryId }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Movies in {categoryId.replace(/-/g, " ")} Category
      </h1>

      <div className="grid grid-cols-12 gap-8">
        {/* Empty div for potential filtering (col-span-4) */}
        <div className="col-span-12 lg:col-span-4">
          {/* Placeholder for filtering options */}
          <div className="bg-gray-100 h-full rounded-lg p-4 shadow-lg">
            <p className="text-center text-gray-500">Filter Options (Coming Soon)</p>
          </div>
        </div>

        {/* Movies grid (col-span-8) */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {movies?.length > 0 ? (
              movies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      src={`${imgBaseUrl}${movie.poster_path}`}
                      alt={movie.title}
                      width={120}
                      height={180}
                      className="w-full h-auto object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-4 line-clamp-3">
                      {movie.overview.slice(0, 80)}...
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>
                        Release:{" "}
                        {new Date(movie.release_date).toLocaleDateString()}
                      </span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded-lg">
                        {movie.vote_average}/10
                      </span>
                    </div>
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
      </div>
    </div>
  );
};

export default CategoryMovies;
