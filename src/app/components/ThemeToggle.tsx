"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), []);
  if (!mounted) return null
  const isDark = theme === "dark"

  return (
    <button
      className="cursor-pointer hover:text-primary transition-colors duration-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} /> }
    </button>
  )
}