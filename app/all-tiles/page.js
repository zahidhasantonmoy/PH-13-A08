import AllTilesClient from "@/components/AllTilesClient";

export default async function AllTilesPage() {
  var res = await fetch(process.env.API_URL + "/tiles");
  var allTiles = await res.json();

  return <AllTilesClient tiles={allTiles} />;
}