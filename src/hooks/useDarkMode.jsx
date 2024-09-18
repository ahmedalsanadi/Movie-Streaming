import { useState, useEffect } from "react"

export const useDarkMode = () => {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode")
    return savedMode ? savedMode === "true" : prefersDarkScheme
  })

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode)
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return { darkMode, toggleDarkMode }
}
