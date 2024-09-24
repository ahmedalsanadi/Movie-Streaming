"use client"
import { usePopularMedia } from "../hooks/usePopularMedia";
import MediaSection from "./MediaSection";

const WhatsPopularSection = () => {
  const categories = [
    { label: "Streaming", value: "streaming" },
    { label: "On TV", value: "on_tv" },
    { label: "For Rent", value: "for_rent" },
    { label: "In Theaters", value: "in_theaters" },
  ];

  return (
    <MediaSection
      title="What's Popular"
      toggleOptions={categories}
      useMediaHook={usePopularMedia}
      initialCategory="streaming"
    />
  );
};

export default WhatsPopularSection;