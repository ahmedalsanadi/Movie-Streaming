import { FaHeart, FaBookmark, FaStar, FaBars } from "react-icons/fa";

const InteractiveButtons = ({ liked, setLiked, bookmarked, setBookmarked, rated, setRated, menuOpen, setMenuOpen }) => {
  return (
    <div className="flex justify-left space-x-2 my-4">
      <button
        onClick={() => setLiked(!liked)}
        className={`p-2 rounded-full transition-all duration-300 shadow-md ${
          liked ? "bg-red-400 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <FaHeart className="w-5 h-5" />
      </button>
      <button
        onClick={() => setBookmarked(!bookmarked)}
        className={`p-2 rounded-full transition-all duration-300 shadow-md ${
          bookmarked ? "bg-blue-400 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <FaBookmark className="w-5 h-5" />
      </button>
      <button
        onClick={() => setRated(!rated)}
        className={`p-2 rounded-full transition-all duration-300 shadow-md ${
          rated ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <FaStar className="w-5 h-5" />
      </button>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 shadow-md"
      >
        <FaBars className="w-5 h-5" />
      </button>
    </div>
  );
};

export default InteractiveButtons;
