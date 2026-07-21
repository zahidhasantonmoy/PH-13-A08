import AllTilesClient from "@/components/AllTilesClient";

export default async function AllTilesPage() {
  const res = await fetch(process.env.API_URL + "/tiles");
  const allTiles = await res.json();

  return <AllTilesClient tiles={allTiles} />;
}
