import React from "react";

const TrailerModal = ({ trailerKey, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 p-4 rounded-lg">
        <button
          className="absolute top-2 right-2 text-white bg-red-600 px-4 py-2 rounded-full"
          onClick={onClose}
        >
          Close
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[225px] md:h-[450px] mt-4"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
