import TileCard from "./TileCard";

export default async function FeaturedTiles() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/tiles");
  const allTiles = await res.json();

  const featured = [];
  let count = 0;
  for (let i = 0; i < allTiles.length; i++) {
    if (count < 4) {
      featured.push(allTiles[i]);
      count = count + 1;
    }
  }

  const list1 = [];
  for (let j = 0; j < featured.length; j++) {
    const item1 = featured[j];
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
}s