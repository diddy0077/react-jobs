import React, { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react"; // optional - replace with emoji if you don't use lucide


const ThemeToggle = () => {
 const [isDark, setIsDark] = useState(() => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme === "dark";
  }
  // If no saved theme, fall back to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
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
  
  
   useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);


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
      className="p-2 rounded-md hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
    >
      {isDark ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-gray-200" />}
    </button>
    </div>
  )
}

export default ThemeToggle