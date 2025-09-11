import React, { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react"; // optional - replace with emoji if you don't use lucide


const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});


useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [isDark]);


  function toggleDark() {
    setIsDark((prev) => {
       return !prev
    })
     console.log(isDark)
  }

  return (
    <div>
      <button
      onClick={toggleDark}
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      className="p-2 rounded-md hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      {isDark ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-200" />}
    </button>
    </div>
  )
}

export default ThemeToggle