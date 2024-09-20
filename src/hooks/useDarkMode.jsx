import { useState, useEffect } from "react"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
      const savedMode = localStorage.getItem("darkMode")
      return savedMode !== null ? JSON.parse(savedMode) : prefersDarkScheme
    }
    return false // Default to false in SSR
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Listen for changes in system dark mode preference
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      )

      const handleChange = (e) => {
        if (!localStorage.getItem("darkMode")) {
          setDarkMode(e.matches) // Update if there's no saved preference
        }
      }

      darkModeMediaQuery.addEventListener("change", handleChange)

      return () =>
        darkModeMediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode))
      document.documentElement.classList.toggle("dark", darkMode)
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return { darkMode, toggleDarkMode }
}
