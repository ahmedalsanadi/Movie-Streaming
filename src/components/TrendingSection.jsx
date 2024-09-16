"use client";
import { useState } from 'react';
import { useTrendingMovies } from '../hooks/useTrendingMovies';
import ToggleSwitch from './ToggleSwitch';
import MediaCard from './MediaCard'; 
import HorizontalSlider from './HorizontalSlider';

const TrendingSection = () => {
    const [trendingType, setTrendingType] = useState('day');
    const { movies, loading, error } = useTrendingMovies(trendingType);
    const trendingOptions = [
        { value: 'day', label: 'Today' },
        { value: 'week', label: 'This Week' }
      ];
    
      if (error) return <p>{error}</p>;
    
  return (
    <div>TrendingSection</div>
  )
}

export default TrendingSection