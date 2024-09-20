"use client"
import { useState, useEffect } from "react"
import Image from "next/image" // Import Next.js Image component
import { fetchPopularActors } from "../../services/fetchActors"

// Define the URLs for default images
import defaultMaleImage from "./../../images/default-male.jpg" // Ensure these images are in public/images
import defaultFemaleImage from "./../../images/default-female.jpg"
import defaultUnknownImage from "./../../images/default-unknown.jpg"
// Component for handling actor images with loading placeholder
const ActorImage = ({ profilePath, gender, name }) => {
  const [imageSrc, setImageSrc] = useState(getDefaultImage(gender)) // Start with default image

  // Set the proper image after it's fully loaded
  const handleLoadingComplete = () => {
    if (profilePath) {
      setImageSrc(`https://image.tmdb.org/t/p/w200${profilePath}`)
    }
  }
  return (
    <Image
      src={imageSrc} // Image source based on loading state
      alt={name}
      width={200}
      height={300}
      className="w-full h-auto rounded-lg"
      // This triggers once the image has successfully loaded
      onLoadingComplete={handleLoadingComplete}
      onError={(e) => {
        e.target.onerror = null // Prevent infinite loop
        setImageSrc(getDefaultImage(gender)) // Fallback to default image on error
      }}
    />
  )
}

// Helper function for determining the default image based on gender
const getDefaultImage = (gender) => {
  if (gender === 1) return defaultFemaleImage
  if (gender === 2) return defaultMaleImage
  return defaultUnknownImage
}
const PopularActors = () => {
  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getActors = async () => {
      const data = await fetchPopularActors()
      setActors(data) // Update the state with fetched actors
      setLoading(false)
    }
    getActors()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Popular Actors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {actors.map((actor) => (
          <div key={actor.id} className="actor-card p-4 shadow-lg">
            {/* Component to handle the image loading logic */}
            <ActorImage
              profilePath={actor.profile_path}
              gender={actor.gender}
              name={actor.name}
            />
            <h2 className="mt-2 text-xl font-semibold">{actor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularActors
