import AllTilesClient from "@/components/AllTilesClient";

export default async function AllTilesPage() {
  let allTiles = [];

  try {
    const res = await fetch(process.env.API_URL + "/tiles", { cache: "no-store" });
    if (res.ok) {
      allTiles = await res.json();
    }
  } catch (error) {
    allTiles = [];
  }

  return <AllTilesClient tiles={allTiles} />;
}