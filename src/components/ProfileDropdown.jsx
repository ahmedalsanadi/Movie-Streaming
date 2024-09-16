import { useState } from "react";

const ProfileDropdown = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-[#d1225b] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold cursor-pointer"
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      >
        A
      </div>
      {showProfileDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-6 font-custom">
          {/* Arrow Indicator */}
          <div className="absolute right-2 -top-1 w-3 h-3 border-l border-b border-white transform rotate-45 bg-white"></div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">AhmedAlsanadi</span>
            <span className="text-sm text-gray-500">View profile</span>
            <div className="border-b border-gray-300 my-2"></div>
            <ul className="space-y-1">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Discussions</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Lists</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ratings</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Watchlist</li>
              <li className="border-b border-gray-300 my-2"></li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Edit Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-red-200 cursor-pointer text-red-500">Logout</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
