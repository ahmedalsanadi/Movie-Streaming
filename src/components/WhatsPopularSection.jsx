"use client";
import React, { useState } from 'react';
import { usePopularMedia } from '../hooks/usePopularMedia';
import MediaCard from './MediaCard';
import MediaCardPlaceholder from './MediaCardPlaceholder';
import ToggleSwitch from './ToggleSwitch';
import HorizontalSlider from './HorizontalSlider';
import Slider from 'react-slick'; // Import the same slider used in TrendingSection

const WhatsPopularSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('streaming');
  const { media, loading, error } = usePopularMedia(selectedCategory);

  const categories = [
    { label: 'Streaming', value: 'streaming' },
    { label: 'On TV', value: 'on_tv' },
    { label: 'For Rent', value: 'for_rent' },
    { label: 'In Theaters', value: 'in_theaters' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 7, // Show 7 slides on larger screens
    slidesToScroll: 10,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1025, // Screen width less than 1025px
        settings: {
          slidesToShow: 4, // Show 4 slides on medium screens
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 3, // Show 3 slides on small screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Screen width less than 480px
        settings: {
          slidesToShow: 2, // Show 2 slides on extra small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto font-custom px-4'>
      <div className="whats-popular-section">
        {/* Heading and Toggle Switch */}
        <div className="toggle-switch flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold pl-4">What's Popular</h2>
          <ToggleSwitch
            options={categories}
            selectedOption={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <HorizontalSlider>
            {[...Array(7)].map((_, index) => (
              <MediaCardPlaceholder key={index} />
            ))}
          </HorizontalSlider>
        ) : (
          <HorizontalSlider>
            <Slider {...sliderSettings}>
              {media.map((item) => {
                // Check if the item is a TV show or a movie
                const link = item.name ? `/tv/${item.id}` : `/movie/${item.id}`;
                return (
                  <MediaCard
                    key={item.id}
                    imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.title || item.name} // TV shows use `name`, movies use `title`
                    voteAverage={item.vote_average}
                    releaseDate={item.release_date || item.first_air_date} // TV shows use `first_air_date`
                    link={link} // Set link dynamically based on media type
                  />
                );
              })}
            </Slider>
          </HorizontalSlider>
        )}

        {/* Error State */}
        {error && <p className="text-red-500">Failed to load media: {error}</p>}
      </div>
    </div>
  );
};

export default WhatsPopularSection;
