"use client";
import dynamic from "next/dynamic";
import Marquee from "@/components/Marquee";
import FeaturedTiles from "@/components/FeaturedTiles";

const Banner = dynamic(function () {
  return import("@/components/Banner");
}, { ssr: false });

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Marquee />
      <FeaturedTiles />
    </div>
  );
}