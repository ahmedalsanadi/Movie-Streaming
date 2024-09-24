"use client"
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import MediaSection from "./MediaSection";

export default function TrendingSection() {
  const trendingOptions = [
    { value: "day", label: "Today" },
    { value: "week", label: "This Week" },
  ];

  // Create a wrapper hook that matches the expected interface
  const useTrendingMediaWrapper = (trendingType) => {
    const { movies, loading, error } = useTrendingMovies(trendingType);
    return { media: movies, loading, error };
  };

  return (
    <MediaSection
      title="Trending"
      toggleOptions={trendingOptions}
      useMediaHook={useTrendingMediaWrapper}
      initialCategory="day"
    />
  );
}