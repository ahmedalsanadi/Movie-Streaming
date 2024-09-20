import { useState, useEffect } from "react"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode")
      if (savedMode === null) {
        const prefersDarkScheme = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches
        document.documentElement.classList.toggle("dark", prefersDarkScheme)
        return prefersDarkScheme
      } else {
        const userPrefersDarkMode = JSON.parse(savedMode)
        document.documentElement.classList.toggle("dark", userPrefersDarkMode)
        return userPrefersDarkMode
      }
    }
    return false // Default to false in SSR
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Listen for changes in system dark mode preference only if there's no saved preference
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      )

      const handleChange = (e) => {
        if (!localStorage.getItem("darkMode")) {
          setDarkMode(e.matches)
        }
      }

      if (!localStorage.getItem("darkMode")) {
        darkModeMediaQuery.addEventListener("change", handleChange)
      }

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
