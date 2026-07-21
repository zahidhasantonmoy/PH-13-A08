import Link from "next/link";

export default async function TileDetailsPage({ params }) {
  const awaitedParams = await params;
  const tileId = awaitedParams.id;

  const res = await fetch(process.env.API_URL + "/tiles/" + tileId);

  if (res.status === 404) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Tile Not Found</h1>
        <Link href="/all-tiles" className="btn btn-primary mt-4">
          Back to All Tiles
        </Link>
      </div>
    );
  }

  const tileData = await res.json();

  const tagList = [];
  if (tileData.tags) {
    for (let j = 0; j < tileData.tags.length; j++) {
      tagList.push(
        <span key={j} className="badge badge-outline mr-2">
          {tileData.tags[j]}
        </span>
      );
    }
  }

  return (
    <div className="px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img src={tileData.image} alt={tileData.title} className="w-full rounded-xl shadow-md" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{tileData.title}</h1>
        <p className="mb-2">
          <span className="font-semibold">Creator: </span>
          {tileData.creator}
        </p>
        <p className="mb-4 text-gray-600">{tileData.style}</p>
        <p className="mb-4">{tileData.description}</p>
        <div className="mb-4">{tagList}</div>
        <p className="mb-1">
          <span className="font-semibold">Material: </span>
          {tileData.material}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Dimensions: </span>
          {tileData.dimensions}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Price: </span>
          {tileData.price} {tileData.currency}
        </p>
        <Link href="/all-tiles" className="btn btn-outline">
          ← Back to All Tiles
        </Link>
      </div>
    </div>
  );
}
