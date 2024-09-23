"use client";
import React, { useState } from 'react';
import Slider from 'react-slick'; 
import ToggleSwitch from './ToggleSwitch'; 
import MediaCard from './MediaCard'; 
import MediaCardPlaceholder from './MediaCardPlaceholder'; 
import HorizontalSlider from './HorizontalSlider'; 
import { useFreeToWatchMedia } from '../hooks/useFreeToWatchMedia'; 
const FreeToWatchSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('movies'); 
  const { media, loading, error } = useFreeToWatchMedia(selectedCategory); 

  const categories = [
    { label: 'Movies', value: 'movies' },
    { label: 'TV', value: 'tv' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };



  return (
    <div className='container mx-auto font-custom px-4'>
      <div className="free-to-watch-section">
        {/* Heading and Toggle Switch */}
        <div className="toggle-switch flex items-center gap-4 mb-2">
          <h2 className="text-2xl font-bold pl-4">Free To Watch</h2>
          <ToggleSwitch
            options={categories}
            selectedOption={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <HorizontalSlider>
            {[...Array(8)].map((_, index) => (
              <MediaCardPlaceholder key={index} />
            ))}
          </HorizontalSlider>
        ) : (
          <HorizontalSlider>
           
              {media.map((item) => {
                // Check if the item is a TV show or a movie
                const link = item.name ? `/tv/${item.id}` : `/movie/${item.id}`;
                return (
                  <MediaCard
                    key={item.id}
                    imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.title || item.name} // TV shows use `name`, movies use `title`
                    voteAverage={item.vote_average}
                    releaseDate={item.release_date || item.first_air_date} 
                    link={link} 
                  />
                );
              })}
          
          </HorizontalSlider>
        )}

        {/* Error State */}
        {error && <p className="text-red-500">Failed to load media: {error}</p>}
      </div>
    </div>
  );
};

export default FreeToWatchSection;
