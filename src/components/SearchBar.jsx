// components/SearchBar.js
import { useState, useEffect } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { fetchDataFromTMDB } from '../util/fetchDataFromTMDB';

const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [trendingSearches, setTrendingSearches] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchTrendingSearches();
    }
  }, [isOpen]);

  const fetchTrendingSearches = async () => {
    try {
      const data = await fetchDataFromTMDB('/trending/all/day');
      setTrendingSearches(data.results.slice(0, 10));
    } catch (error) {
      console.error('Error fetching trending searches:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
     
        <form onSubmit={handleSearch} className="relative mt-6 md:mt-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie, tv show, person..."
            className="w-full p-2 pr-10 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <button type="submit" className="absolute right-2 top-2">
            <SearchIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </button>
        </form>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Trending</h3>
          <ul className="space-y-2">
            {trendingSearches.map((item) => (
              <li key={item.id} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#01b4e4] cursor-pointer">
                {item.title || item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={onClose} className="absolute top-1 right-2">
        <XIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
};

export default SearchBar;