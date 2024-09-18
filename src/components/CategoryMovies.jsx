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

// Component to render a movie card with front and back views

// Component to display movie details on the back side of the card

// Component to display star rating
const StarRating = ({ rating }) => {
  const stars = Math.round(rating / 2);
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${index < stars ? "text-yellow-500" : "text-gray-500"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.121-6.54L0 6.09l6.545-.955L10 0l2.455 5.136L20 6.09l-5.243 5.46 1.121 6.54z" />
        </svg>
      ))}
      <span className="ml-3 text-base font-bold text-gray-100">{rating}/10</span>
    </div>
  );
};
