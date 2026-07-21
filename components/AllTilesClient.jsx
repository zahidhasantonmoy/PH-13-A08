"use client";

import { useState } from "react";
import TileCard from "./TileCard";

export default function AllTilesClient({ tiles }) {
  const [searchText, setSearchText] = useState("");

  const filteredTiles = [];
  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    const titleLower = tile.title.toLowerCase();
    const searchLower = searchText.toLowerCase();
    if (titleLower.indexOf(searchLower) !== -1) {
      filteredTiles.push(tile);
    }
  }

  const list1 = [];
  for (let j = 0; j < filteredTiles.length; j++) {
    const item1 = filteredTiles[j];
    list1.push(<TileCard key={item1.id} tile={item1} />);
  }

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">All Tiles</h1>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search tiles by title..."
          className="input input-bordered w-full max-w-md"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      {filteredTiles.length === 0 ? (
        <p className="text-center text-gray-500">No tiles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list1}
        </div>
      )}
    </div>
  );
}
