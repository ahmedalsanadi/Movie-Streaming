import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MediaCard = ({ imageUrl, title, voteAverage, releaseDate, link }) => {
  return (
    <Link href={link}>
      <div className="inline-flex flex-col justify-evenly px-1 rounded-b-2xl py-2 mr-4 w-44 transform transition-transform hover:scale-105 hover:shadow-2xl h-full cursor-pointer -z-10 mt-4">
      <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={150}
            height={225}
            className="mb-2 rounded-2xl w-full -z-10"
          />

          {/* Circular Progress Bar */}
          {voteAverage && (
           <div className="absolute bottom-2 left-2 z-30">
              <div
                className="circle-progress"
                role="progressbar"
                style={{ '--progress': voteAverage * 10 }}
              >
                <div className="inner">
                  {Math.round(voteAverage * 10)}
                  <span>x</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-4">
          <h3 className="text-lg block font-semibold mt-2 dark:text-white text-left break-words whitespace-normal">
            {title}
          </h3>
          <p className="text-gray-400 text-left block text-lg font-thin">            {releaseDate
              ? new Date(releaseDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Unknown Release Date'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
