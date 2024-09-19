import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import CardBackSide from "./CardBackSide";



const CardFrontSide = ({ data, imgBaseUrl , link }) => {
  return (
    <Link href={link} passHref> {/* Wrap the card with Link */}
      <div className="relative w-full max-w-xs h-[350px] mx-auto perspective cursor-pointer"> {/* Add cursor-pointer for interactivity */}
        {/* Front side of the card */}
        <div className="card-front absolute w-full h-full bg-opacity-20 shadow-md rounded-lg overflow-hidden transform transition-transform   duration-1000">
          {data.poster_path ? (
            <Image
              src={`${imgBaseUrl}${data.poster_path}`}
              alt={data.title}
              width={250}
              height={200}
              className="w-full h-full object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-100"></div>
          )}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-center p-2 text-lg font-semibold font-custom">
            {data.title}
          </div>
        </div>

        {/* Back side of the card */}
        <div className="card-back absolute w-full h-full bg-gradient-to-br from-[#022c43] to-[#0a3548] text-white flex items-center justify-center rounded-lg transform rotate-y-180 transition-transform duration-1000 shadow-xl">
          <CardBackSide data={data} />
        </div>
      </div>
    </Link>
  );
};

export default CardFrontSide;
