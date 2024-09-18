import React from "react";
import Image from "next/image";
import CardFrontSide from "./CardFrontSide";

const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

// Component to display the list of movies in a category
const CategoryMovies = ({ movies, categoryId }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-[#032541]">
        Movies in {categoryId.replace(/-/g, " ")} Category
      </h1>

      <div className="grid grid-cols-12 gap-4">
        {/* Filter Options Section */}
        <div className="col-span-12 lg:col-span-3 bg-gray-100">
          <div className="filter-options">
            <p className="text-center text-black">Filter Options (Coming Soon)</p>
          </div>
        </div>

        {/* Movies Grid Section */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies?.length > 0 ? (
              movies.map((movie) => <CardFrontSide key={movie.id} data={movie} imgBaseUrl={imgBaseUrl} />)
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

