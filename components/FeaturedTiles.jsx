import tiles from "@/data/tiles.json";
import TileCard from "./TileCard";

export default function FeaturedTiles() {
  var featured = [];
  var count = 0;

  for (var i = 0; i < tiles.length; i++) {
    if (count < 4) {
      featured.push(tiles[i]);
      count = count + 1;
    }
  }

  var list1 = [];
  for (var j = 0; j < featured.length; j++) {
    var item1 = featured[j];
    list1.push(<TileCard key={item1.id} tile={item1} />);
  }

  return (
    <section className="py-12 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Tiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list1}
      </div>
    </section>
  );
}