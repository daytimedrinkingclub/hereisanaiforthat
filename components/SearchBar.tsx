"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ initialSearch = "" }) {
  const [search, setSearch] = useState(initialSearch);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      router.push(`/tools?search=${encodeURIComponent(search)}`);
    } else {
      router.push("/tools");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tools by name, category, or description..."
        className="flex-grow p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
        Search
      </button>
    </form>
  );
}