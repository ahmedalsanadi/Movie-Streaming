import { useState, useEffect } from "react"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches

      const savedMode = localStorage.getItem("darkMode")
      setDarkMode(savedMode ? savedMode === "true" : prefersDarkScheme)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode)
      document.documentElement.classList.toggle("dark", darkMode)
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return { darkMode, toggleDarkMode }
}
