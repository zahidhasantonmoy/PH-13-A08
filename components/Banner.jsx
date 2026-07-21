"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [];

slides.push({
  title: "Discover Your Perfect Aesthetic",
  img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
});

slides.push({
  title: "Premium Ceramic Collection",
  img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
});

slides.push({
  title: "Elegant Marble Designs",
  img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
});

export default function Banner() {
  const list1 = [];

  for (let i = 0; i < slides.length; i++) {
    const item1 = slides[i];
    const bg = "url(" + item1.img + ")";

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
