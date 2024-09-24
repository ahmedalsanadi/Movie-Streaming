// components/SearchBar.js
import { useState, useEffect } from 'react';
import { TrendingUpIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import { fetchDataFromTMDB } from '../util/fetchDataFromTMDB';
import Link from 'next/link';
import Image from 'next/image';

const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [trendingSearches, setTrendingSearches] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const data = await fetchDataFromTMDB(`/search/multi?query=${encodeURIComponent(query)}&page=1`);
      setSearchResults(data.results.slice(0, 10));
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleItemClick = (item) => {
    onClose();
    // You can add additional logic here, like navigating to the item's page
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
        
        {isLoading ? (
          <div className="mt-4 text-center">Loading...</div>
        ) : searchResults.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Search Results</h3>
            <ul className="space-y-2">
              {searchResults.map((item) => (
                <li key={item.id} className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-[#01b4e4] cursor-pointer border-b border-gray-400 border-opacity-35 p-2">
                  <Link href={`/${item.media_type}/${item.id}`} onClick={() => handleItemClick(item)}>
                    <div className="flex items-center">
                      {item.poster_path || item.profile_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w92${item.poster_path || item.profile_path}`}
                          alt={item.title || item.name}
                          width={45}
                          height={68}
                          className="mr-3 rounded"
                        />
                      ) : (
                        <div className="w-[45px] h-[68px] bg-gray-300 mr-3 rounded flex items-center justify-center">
                          <SearchIcon className="w-6 h-6 text-gray-500" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold">{item.title || item.name}</p>
                        <p className="text-xs text-gray-500">{item.media_type}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Trending</h3>
            </div>
            <ul className="space-y-2">
              {trendingSearches.map((item) => (
                <li key={item.id} className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-[#01b4e4] cursor-pointer border-b border-gray-400 border-opacity-35 p-1">
                  <SearchIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <Link href={`/${item.media_type}/${item.id}`} onClick={() => handleItemClick(item)}>
                    {item.title || item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <button onClick={onClose} className="absolute top-1 right-2">
        <XIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
};

export default SearchBar;