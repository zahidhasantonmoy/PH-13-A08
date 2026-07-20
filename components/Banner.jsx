"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

var slides = [];
slides.push({ title: "Discover Your Perfect Aesthetic", img: "https://placehold.co/1200x500/1e3a8a/ffffff?text=Modern+Tiles" });
slides.push({ title: "Premium Ceramic Collection", img: "https://placehold.co/1200x500/065f46/ffffff?text=Ceramic+Tiles" });
slides.push({ title: "Elegant Marble Designs", img: "https://placehold.co/1200x500/78350f/ffffff?text=Marble+Tiles" });

export default function Banner() {
  var list1 = [];

  for (var i = 0; i < slides.length; i++) {
    var item1 = slides[i];
    var bg = "url(" + item1.img + ")";

    list1.push(
      <SwiperSlide key={i}>
        <div
          className="w-full h-full flex flex-col justify-center items-center text-white text-center gap-4 bg-cover bg-center px-4"
          style={{ backgroundImage: bg }}
        >
          <h1 className="text-2xl md:text-5xl font-bold">{item1.title}</h1>
          <Link href="/all-tiles" className="btn btn-primary">
            Browse Now
          </Link>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[350px] md:h-[500px]"
    >
      {list1}
    </Swiper>
  );
}