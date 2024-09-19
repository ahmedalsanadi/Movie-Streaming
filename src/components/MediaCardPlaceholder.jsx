const MediaCardPlaceholder = () => {
    return (
      <div className="inline-flex flex-col justify-evenly px-1 py-2 mr-4 w-44 h-full cursor-pointer animate-pulse">
        {/* Placeholder for image */}
        <div className="bg-gray-300 rounded-2xl w-full h-[225px] mb-2"></div>
  
        {/* Placeholder for title */}
        <div className="px-4">
          <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
          {/* Placeholder for release date */}
          <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
        </div>
      </div>
    );
  };
  export default MediaCardPlaceholder;