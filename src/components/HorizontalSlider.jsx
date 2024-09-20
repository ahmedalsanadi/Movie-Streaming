import React from "react"
import bgImg from "../images/trending-bg.svg"

const HorizontalSlider = ({ children }) => {
  return (
    <div
      className="mx-auto px-4 py-1 bg-bottom bg-no-repeat "
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        backgroundImage: `url(${bgImg.src})`,
        backgroundPosition: "50% 250px;",
      }}
    >
      {children}
    </div>
  )
}

export default HorizontalSlider
