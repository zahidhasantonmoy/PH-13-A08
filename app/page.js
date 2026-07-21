import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedTiles from "@/components/FeaturedTiles";
export const dynamic = "force-dynamic";
export default function HomePage() {
  return (
    <div>
      <Banner />
      <Marquee />
      <FeaturedTiles />
    </div>
  );
}