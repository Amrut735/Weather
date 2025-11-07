import React from "react";

export default function SearchBar({ value, onChange, onSearch, onSearchEnter, loading }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearchEnter(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
      />
      <button
        onClick={onSearch}
        disabled={loading}
        className="px-4 py-2 bg-sky-500 text-white rounded-md disabled:opacity-60"
      >
        {loading ? "…" : "Search"}
      </button>
    </div>
  );
}
