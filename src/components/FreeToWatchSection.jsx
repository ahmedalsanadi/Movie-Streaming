"use client"
import { useFreeToWatchMedia } from '../hooks/useFreeToWatchMedia';
import MediaSection from "./MediaSection";

const FreeToWatchSection = () => {
  const categories = [
    { label: 'Movies', value: 'movies' },
    { label: 'TV', value: 'tv' },
  ];

  return (
    <MediaSection
      title="Free To Watch"
      toggleOptions={categories}
      useMediaHook={useFreeToWatchMedia}
      initialCategory="movies"
    />
  );
};

export default FreeToWatchSection;