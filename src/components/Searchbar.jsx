// SearchBar.jsx
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange = () => {},
  placeholder = "Search jobs by title, company or location...",
  debounce = 300,
  className = "",
}) {
  const [term, setTerm] = useState(value);

  // Push debounced value up
  useEffect(() => {
    const t = setTimeout(() => {
      onChange(term.trim());
    }, debounce);
    return () => clearTimeout(t);
  }, [term, debounce, onChange]);

  // Sync with parent value
  useEffect(() => {
    setTerm(value);
  }, [value]);

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <label htmlFor="job-search" className="sr-only">
        Search jobs
      </label>

      <div className="relative">
        {/* Icon */}
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
        </span>

        {/* Input */}
        <input
          id="job-search"
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={placeholder}
          className="
            w-full pl-11 pr-10 py-3
            bg-white/95 dark:bg-gray-900
            text-gray-800 dark:text-gray-100
            border border-gray-200 dark:border-gray-700
            rounded-lg shadow-sm
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500
            transition-colors duration-300
          "
        />

        {/* Clear button */}
        {term && (
          <button
            type="button"
            onClick={() => setTerm("")}
            aria-label="Clear search"
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              p-1 rounded-md
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors duration-200
            "
          >
            <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        )}
      </div>
    </div>
  );
}
