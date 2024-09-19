import React from "react"

const ToggleSwitch = ({ options, selectedOption, onChange }) => {
  return (
    <div className="toggle-switch inline-flex items-center gap-4">
      <div className="bg-gray-300 rounded-full flex items-center">
        {options.map((option) => (
          <button
            key={option.value}
            className={`py-1 px-4 rounded-full transition-all duration-700 ${
              selectedOption === option.value
                ? "bg-[#032541] text-white"
                : "text-gray-600"
            }`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ToggleSwitch
