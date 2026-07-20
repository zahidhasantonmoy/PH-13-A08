"use client";
import { useState } from "react";
import tiles from "@/data/tiles.json";
import TileCard from "@/components/TileCard";

export default function AllTilesPage() {
  var [x, setX] = useState("");

  var filteredTiles = [];
  for (var i = 0; i < tiles.length; i++) {
    var tile = tiles[i];
    var titleLower = tile.title.toLowerCase();
    var searchLower = x.toLowerCase();
    if (titleLower.indexOf(searchLower) !== -1) {
      filteredTiles.push(tile);
    }
  }

  var list1 = [];
  for (var j = 0; j < filteredTiles.length; j++) {
    var item1 = filteredTiles[j];
    list1.push(<TileCard key={item1.id} tile={item1} />);
  }

  function handleSearchChange(e) {
    setX(e.target.value);
  }

  var content;
  if (filteredTiles.length === 0) {
    content = <p className="text-center text-gray-500">No tiles found.</p>;
  } else {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list1}
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        All Tiles
      </h1>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search tiles by title..."
          className="input input-bordered w-full max-w-md"
          value={x}
          onChange={handleSearchChange}
        />
      </div>
      {content}
    </div>
  );
}