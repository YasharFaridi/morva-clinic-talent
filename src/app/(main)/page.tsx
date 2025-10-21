"use client";

import { useRef } from "react";

import About from "@/components/home/About";
import Articles from "@/components/home/Articles";
import Carts from "@/components/home/Carts";
import Courses from "@/components/home/Courses";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Permissions from "@/components/home/Permissions";
import Services from "@/components/home/Services";

export default function Home() {
  const cartsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToCarts = () => {
    cartsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onStartClick={handleScrollToCarts} />
      <Services />
      <div ref={cartsRef}>
        <Carts />
      </div>
      <About />
      <Articles />
      <Courses />
      <Gallery />
      <Permissions />
    </>
  );
}
