"use client"
import { useEffect, useState } from "react"
import { fetchDataFromTMDB } from "../../../util/fetchDataFromTMDB"
import Image from "next/image"
import Link from "next/link" // Import Link from Next.js
import LoadingSpinner from "@/components/LoadingSpinner"

const ActorPage = ({ params }) => {
  const { id } = params // Get actor ID from the dynamic route
  const [actor, setActor] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getActorDetails = async () => {
      try {
        const data = await fetchDataFromTMDB(
          `/person/${id}?append_to_response=movie_credits`,
        )
        setActor(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching actor details:", error)
        setLoading(false)
      }
    }
    getActorDetails()
  }, [id])

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    )
  }

  if (!actor) {
    return <div>Actor not found</div>
  }

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Actor Image */}
      <div className="flex-shrink-0">
        <Image
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
          width={300}
          height={450}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Actor Info */}
      <div className="flex-grow">
        <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>

        {/* Biography */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Biography</h2>
          <p className="text-lg">
            {actor.biography || "Biography not available."}
          </p>
        </div>

        {/* Known For */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Known For</h2>
          <div className="flex overflow-x-auto space-x-4">
            {actor.movie_credits?.cast.slice(0, 6).map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-40">
                <Link href={`/movie/${movie.id}`} passHref>
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    width={160}
                    height={240}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 text-sm font-medium">
                    {movie.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActorPage
