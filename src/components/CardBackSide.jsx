import StarRating from "./StarRating";
const CardBackSide = ({ data }) => {
  return (
    <div className="p-6 text-left">
      {/*  Details Title */}
      <h2 className="text-3xl font-bold mb-3 text-white">Details</h2>

      {/* Overview */}
      <p className="text-base mb-2 text-gray-400">{data.overview.slice(0, 100)}</p>

      {/* Release Date Section */}
      <div className="mb-2">
        <p className="font-semibold text-yellow-300">Release Date:</p>
        <p className="text-base text-gray-400 italic">{data.release_date}</p>
      </div>

      {/* Rating Section */}
      <div className="mb-4">
        <p className="font-semibold text-yellow-300">Rating:</p>
        <StarRating rating={data.vote_average} />
      </div>
    </div>
  );
};
export default CardBackSide;