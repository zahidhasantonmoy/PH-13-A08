import AllTilesClient from "@/components/AllTilesClient";

import AllTilesClient from "@/components/AllTilesClient";

export default async function AllTilesPage() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/tiles");
  const allTiles = await res.json();

  return <AllTilesClient tiles={allTiles} />;
}