import React from "react"
import Image from "next/image"

const CategoryMovies = ({ movies, categoryId }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500"

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#032541]">
        Movies in {categoryId.replace(/-/g, " ")} Category
      </h1>

      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 lg:col-span-3 bg-gray-100">
          <div className="filter-options">
            <p className="text-center text-black">
              Filter Options (Coming Soon)
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies?.length > 0 ? (
              movies.map((movie) => (
                <div
                  key={movie.id}
                  className="relative w-full max-w-xs h-[350px] mx-auto perspective"
                >
                  {/* Front side of the card */}
                  <div className="card-front absolute w-full h-full bg-opacity-20 shadow-md rounded-lg overflow-hidden transform transition-transform duration-500">
                    {movie.poster_path ? (
                      <Image
                        src={`${imgBaseUrl}${movie.poster_path}`}
                        alt={movie.title}
                        width={250}
                        height={200}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100"></div>
                    )}
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-center p-2 text-lg font-semibold font-custom">
                      {movie.title}
                    </div>
                  </div>

                  {/* Back side of the card */}
                  <div className="card-back absolute w-full h-full bg-gradient-to-br from-[#022c43] to-[#0a3548] text-white flex items-center justify-center rounded-lg transform rotate-y-180 transition-transform duration-500 shadow-xl">
                    <div className="p-6 text-left">
                      {/* Movie Details Title */}
                      <h2 className="text-3xl font-bold mb-3 text-white">
                         Details
                      </h2>

                      {/* Movie Overview */}
                      <p className="text-base  mb-2 text-gray-400">
                        {movie.overview.slice(0, 100)}
                      </p>

                      {/* Release Date Section */}
                      <div className="">
                        <p className="font-semibold text-yellow-300">
                          Release Date:
                        </p>
                        <p className="text-base text-gray-400 italic">
                          {movie.release_date}
                        </p>
                      </div>

                      {/* Rating Section */}
                      <div className="mb-4">
                        <p className="font-semibold text-yellow-300">
                          Rating:
                        </p>
                        <div className="flex items-center justify-center mb-4">
                          {/* Displaying rating stars */}
                          {Array.from({ length: 5 }, (_, index) => (
                            <svg
                              key={index}
                              className={`h-4 w-4 ${
                                index < Math.round(movie.vote_average / 2)
                                  ? "text-yellow-500"
                                  : "text-gray-500"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 15l-5.878 3.09 1.121-6.54L0 6.09l6.545-.955L10 0l2.455 5.136L20 6.09l-5.243 5.46 1.121 6.54z" />
                            </svg>
                          ))}
                          <span className="ml-3 text-base font-bold text-gray-100">
                            {movie.vote_average}/10
                          </span>
                        </div>
                      </div>

                      {/* Circular Progress for Rating */}
       
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
  )
}

export default CategoryMovies
